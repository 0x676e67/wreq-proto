use std::{
    io::{Read, Write},
    net::{Ipv6Addr, SocketAddr, TcpStream as StdTcpStream},
    sync::Mutex,
};

use once_cell::sync::OnceCell;
use tokio::{
    io::{AsyncRead, AsyncReadExt, AsyncWrite, AsyncWriteExt, copy, split},
    net::{TcpListener, UdpSocket},
    runtime::Runtime,
};
use wreq_socks::{
    Result,
    tcp::{socks4::Socks4Listener, socks5::Socks5Listener},
};

use super::*;

pub async fn echo_server() -> Result<()> {
    let listener = TcpListener::bind(&SocketAddr::from(([0, 0, 0, 0], 10007))).await?;
    loop {
        let (mut stream, _) = listener.accept().await?;
        tokio::spawn(async move {
            let (mut reader, mut writer) = stream.split();
            copy(&mut reader, &mut writer).await.unwrap();
        });
    }
}

pub async fn udp_echo_server(socket: UdpSocket) -> Result<()> {
    let mut buf = [0u8; 1500];
    loop {
        let (n, from) = socket.recv_from(&mut buf).await?;
        socket.send_to(&buf[..n], from).await?;
    }
}

pub async fn reply_response<S: AsyncRead + AsyncWrite + Unpin>(mut socket: S) -> Result<[u8; 5]> {
    socket.write_all(MSG).await?;
    let mut buf = [0; 5];
    socket.read_exact(&mut buf).await?;
    Ok(buf)
}

pub async fn test_connect<S: AsyncRead + AsyncWrite + Unpin>(socket: S) -> Result<()> {
    let res = reply_response(socket).await?;
    assert_eq!(&res[..], MSG);
    Ok(())
}

pub fn test_bind<S: 'static + AsyncRead + AsyncWrite + Unpin + Send>(
    listener: Socks5Listener<S>,
) -> Result<()> {
    let bind_addr = listener.bind_addr().to_owned();
    runtime().lock().unwrap().spawn(async move {
        let stream = listener.accept().await.unwrap();
        let (mut reader, mut writer) = split(stream);
        copy(&mut reader, &mut writer).await.unwrap();
    });

    let mut tcp = StdTcpStream::connect(bind_addr)?;
    tcp.write_all(MSG)?;
    let mut buf = [0; 5];
    tcp.read_exact(&mut buf[..])?;
    assert_eq!(&buf[..], MSG);
    Ok(())
}

#[cfg(unix)]
pub async fn connect_unix(proxy_addr: &str) -> Result<tokio::net::UnixStream> {
    tokio::net::UnixStream::connect(proxy_addr)
        .await
        .map_err(wreq_socks::Error::Io)
}

pub fn runtime() -> &'static Mutex<Runtime> {
    static RUNTIME: OnceCell<Mutex<Runtime>> = OnceCell::new();
    RUNTIME.get_or_init(|| {
        let runtime = Runtime::new().expect("Unable to create runtime");
        runtime.spawn(async { echo_server().await.expect("Unable to bind") });
        // Bind the UDP socket up front so the port is listening before any test
        // sends to it (a UDP send to an unbound port is silently lost). Bind on
        // the dual-stack wildcard so a domain target the proxy resolves to either
        // `127.0.0.1` or `::1` reaches the echo server.
        let udp_socket = runtime
            .block_on(UdpSocket::bind(&SocketAddr::from((Ipv6Addr::UNSPECIFIED, 10008))))
            .expect("Unable to bind UDP");
        runtime.spawn(async move {
            udp_echo_server(udp_socket)
                .await
                .expect("UDP echo server failed")
        });
        Mutex::new(runtime)
    })
}

pub fn test_bind_socks4<S: 'static + AsyncRead + AsyncWrite + Unpin + Send>(
    listener: Socks4Listener<S>,
) -> Result<()> {
    let bind_addr = listener.bind_addr().to_owned();
    runtime().lock().unwrap().spawn(async move {
        let stream = listener.accept().await.unwrap();
        let (mut reader, mut writer) = split(stream);
        copy(&mut reader, &mut writer).await.unwrap();
    });

    let mut tcp = StdTcpStream::connect(bind_addr)?;
    tcp.write_all(MSG)?;
    let mut buf = [0; 5];
    tcp.read_exact(&mut buf[..])?;
    assert_eq!(&buf[..], MSG);
    Ok(())
}
