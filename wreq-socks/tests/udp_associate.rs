mod common;

#[cfg(feature = "tokio")]
use common::*;
#[cfg(feature = "tokio")]
use wreq_socks::{Result, udp::Socks5Datagram};

#[cfg(feature = "tokio")]
#[test]
fn udp_associate_no_auth() -> Result<()> {
    let runtime = runtime().lock().unwrap();
    runtime.block_on(async {
        let udp = Socks5Datagram::associate(PROXY_ADDR, "0.0.0.0:0").await?;

        let sent = udp.send_to(MSG, UDP_ECHO_SERVER_ADDR).await?;
        assert_eq!(sent, MSG.len());

        let mut buf = [0u8; 64];
        let (n, from) = udp.recv_from(&mut buf).await?;
        assert_eq!(&buf[..n], MSG);
        assert_eq!(from.port(), 10008);
        assert!(from.ip().is_loopback());
        Ok(())
    })
}

#[cfg(feature = "tokio")]
#[test]
fn udp_associate_domain_target() -> Result<()> {
    let runtime = runtime().lock().unwrap();
    runtime.block_on(async {
        let udp = Socks5Datagram::associate(PROXY_ADDR, "0.0.0.0:0").await?;

        let sent = udp.send_to(MSG, ("localhost", 10008)).await?;
        assert_eq!(sent, MSG.len());

        let mut buf = [0u8; 64];
        let (n, from) = udp.recv_from(&mut buf).await?;
        assert_eq!(&buf[..n], MSG);
        assert_eq!(from.port(), 10008);
        assert!(from.ip().is_loopback());
        Ok(())
    })
}

#[cfg(feature = "tokio")]
#[test]
fn udp_associate_recv_datagram() -> Result<()> {
    let runtime = runtime().lock().unwrap();
    runtime.block_on(async {
        let udp = Socks5Datagram::associate(PROXY_ADDR, "0.0.0.0:0").await?;
        udp.send_to(MSG, UDP_ECHO_SERVER_ADDR).await?;

        let (payload, from) = udp.recv_datagram().await?;
        assert_eq!(&payload[..], MSG);
        assert_eq!(from.port(), 10008);
        Ok(())
    })
}
