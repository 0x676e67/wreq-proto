//! SOCKS5 UDP associate support.

use std::{
    io,
    net::{IpAddr, Ipv4Addr, Ipv6Addr, SocketAddr},
    task::{Context, Poll},
};

use futures_util::{future::poll_fn, ready};
#[cfg(feature = "tokio")]
use tokio::net::{TcpStream, UdpSocket};

#[cfg(feature = "tokio")]
use crate::{Authentication, ToProxyAddrs};
use crate::{
    Error, IntoTargetAddr, Result, TargetAddr,
    io::{AsyncSocket, AsyncUdpSocket},
    tcp::socks5::Socks5Stream,
};

/// Maximum size of the SOCKS UDP request header (domain address type).
pub const MAX_HEADER_LEN: usize = 2 + 1 + 1 + 1 + 255 + 2;
/// Buffer size that can hold any relayed datagram (header + maximum UDP
/// payload).
pub const MAX_DATAGRAM_LEN: usize = MAX_HEADER_LEN + 65_535;

/// A SOCKS5 UDP client.
///
/// The datagram socket `U` is sent to and received from with the SOCKS UDP
/// request header added and stripped transparently. The TCP control connection
/// is kept alive for as long as the `Socks5Datagram` lives; dropping it tears
/// down the association.
#[derive(Debug)]
pub struct Socks5Datagram<S, U> {
    socket: U,
    relay_addr: SocketAddr,
    // Held only to keep the association alive: dropping the control connection
    // tears it down. Never read after construction.
    #[allow(dead_code)]
    control: Socks5Stream<S>,
}

#[cfg(feature = "tokio")]
impl Socks5Datagram<TcpStream, UdpSocket> {
    /// Establishes a UDP association through a SOCKS5 proxy given the proxy
    /// address.
    ///
    /// `target` is the address the client expects to send UDP datagrams from;
    /// pass an all-zeros address such as `"0.0.0.0:0"` when it is not known in
    /// advance.
    ///
    /// # Error
    ///
    /// It propagates the error that occurs in the conversion from `T` to
    /// `TargetAddr`.
    pub async fn associate<'t, P, T>(
        proxy: P,
        target: T,
    ) -> Result<Socks5Datagram<TcpStream, UdpSocket>>
    where
        P: ToProxyAddrs,
        T: IntoTargetAddr<'t>,
    {
        let control = Socks5Stream::associate(proxy, target, Authentication::None).await?;
        let proxy_host = control.peer_addr()?.ip();
        Self::from_control(control, Some(proxy_host)).await
    }

    /// Establishes a UDP association through a SOCKS5 proxy using given
    /// username, password and the address of the proxy.
    ///
    /// # Error
    ///
    /// It propagates the error that occurs in the conversion from `T` to
    /// `TargetAddr`.
    pub async fn associate_with_password<'a, 't, P, T>(
        proxy: P,
        target: T,
        username: &'a str,
        password: &'a str,
    ) -> Result<Socks5Datagram<TcpStream, UdpSocket>>
    where
        P: ToProxyAddrs,
        T: IntoTargetAddr<'t>,
    {
        let control = Socks5Stream::associate(
            proxy,
            target,
            Authentication::Password { username, password },
        )
        .await?;
        let proxy_host = control.peer_addr()?.ip();
        Self::from_control(control, Some(proxy_host)).await
    }
}

#[cfg(feature = "tokio")]
impl<S> Socks5Datagram<S, UdpSocket>
where
    S: AsyncSocket + Unpin,
{
    /// Establishes a UDP association through a SOCKS5 proxy over the given
    /// control socket, binding a tokio UDP relay socket.
    ///
    /// The control socket is generic, so the proxy address cannot be read from
    /// it; if the proxy returns an unspecified relay address this fails. Use
    /// [`associate_with_socket_and_proxy_host`](Socks5Datagram::associate_with_socket_and_proxy_host)
    /// to supply the proxy host for such proxies.
    ///
    /// # Error
    ///
    /// It propagates the error that occurs in the conversion from `T` to
    /// `TargetAddr`.
    pub async fn associate_with_socket<'t, T>(
        socket: S,
        target: T,
    ) -> Result<Socks5Datagram<S, UdpSocket>>
    where
        T: IntoTargetAddr<'t>,
    {
        let control = Socks5Stream::associate_with_socket(socket, target).await?;
        Self::from_control(control, None).await
    }

    /// Establishes a UDP association over the given control socket using given
    /// username, password and a socket to the proxy.
    ///
    /// See [`associate_with_socket`](Socks5Datagram::associate_with_socket) for
    /// the caveat about proxies that return an unspecified relay address.
    ///
    /// # Error
    ///
    /// It propagates the error that occurs in the conversion from `T` to
    /// `TargetAddr`.
    pub async fn associate_with_password_and_socket<'a, 't, T>(
        socket: S,
        target: T,
        username: &'a str,
        password: &'a str,
    ) -> Result<Socks5Datagram<S, UdpSocket>>
    where
        T: IntoTargetAddr<'t>,
    {
        let control =
            Socks5Stream::associate_with_password_and_socket(socket, target, username, password)
                .await?;
        Self::from_control(control, None).await
    }

    /// Establishes a UDP association over the given control socket, supplying
    /// the proxy host address explicitly.
    ///
    /// `proxy_host` is used to recover the relay endpoint when the proxy returns
    /// an unspecified relay address, which means "send to the host of the
    /// control connection". Pass the host you connected to.
    ///
    /// # Error
    ///
    /// It propagates the error that occurs in the conversion from `T` to
    /// `TargetAddr`.
    pub async fn associate_with_socket_and_proxy_host<'t, T>(
        socket: S,
        target: T,
        proxy_host: IpAddr,
    ) -> Result<Socks5Datagram<S, UdpSocket>>
    where
        T: IntoTargetAddr<'t>,
    {
        let control = Socks5Stream::associate_with_socket(socket, target).await?;
        Self::from_control(control, Some(proxy_host)).await
    }

    /// Establishes a UDP association over the given control socket using given
    /// username, password and the proxy host address. See
    /// [`associate_with_socket_and_proxy_host`](Socks5Datagram::associate_with_socket_and_proxy_host).
    ///
    /// # Error
    ///
    /// It propagates the error that occurs in the conversion from `T` to
    /// `TargetAddr`.
    pub async fn associate_with_password_and_socket_and_proxy_host<'a, 't, T>(
        socket: S,
        target: T,
        username: &'a str,
        password: &'a str,
        proxy_host: IpAddr,
    ) -> Result<Socks5Datagram<S, UdpSocket>>
    where
        T: IntoTargetAddr<'t>,
    {
        let control =
            Socks5Stream::associate_with_password_and_socket(socket, target, username, password)
                .await?;
        Self::from_control(control, Some(proxy_host)).await
    }

    async fn from_control(
        control: Socks5Stream<S>,
        proxy_host: Option<IpAddr>,
    ) -> Result<Socks5Datagram<S, UdpSocket>> {
        let relay_addr = resolve_relay_addr(&control, proxy_host)?;

        let bind_addr: SocketAddr = if relay_addr.is_ipv6() {
            (Ipv6Addr::UNSPECIFIED, 0).into()
        } else {
            (Ipv4Addr::UNSPECIFIED, 0).into()
        };
        let socket = UdpSocket::bind(bind_addr).await?;

        Ok(Socks5Datagram {
            socket,
            relay_addr,
            control,
        })
    }
}

impl<S, U> Socks5Datagram<S, U>
where
    S: AsyncSocket + Unpin,
    U: AsyncUdpSocket,
{
    /// Establishes a UDP association over caller-supplied control and datagram
    /// sockets, for use with runtimes other than tokio.
    ///
    /// `control` is a stream on which the `ASSOCIATE` handshake has already
    /// completed (see [`Socks5Stream::associate_with_socket`]). `udp_socket` is
    /// the local datagram socket used to reach the relay; it should be bound but
    /// left unconnected, as datagrams are sent to and filtered by the relay
    /// endpoint. `proxy_host` recovers the relay host when the proxy returns an
    /// unspecified relay address; pass `None` if it reports a concrete address.
    pub fn associate_with_sockets(
        control: Socks5Stream<S>,
        udp_socket: U,
        proxy_host: Option<IpAddr>,
    ) -> Result<Socks5Datagram<S, U>> {
        let relay_addr = resolve_relay_addr(&control, proxy_host)?;
        Ok(Socks5Datagram {
            socket: udp_socket,
            relay_addr,
            control,
        })
    }

    /// Attempts to send `buf` to `target` through the proxy without blocking,
    /// returning the number of payload bytes sent.
    ///
    /// `scratch` is used to assemble the encapsulated datagram so no allocation
    /// is performed; it must be at least `buf.len() +` [`MAX_HEADER_LEN`] bytes.
    /// A `target` domain longer than 255 bytes does not fit the header and is
    /// rejected.
    pub fn poll_send_to(
        &self,
        cx: &mut Context<'_>,
        buf: &[u8],
        target: &TargetAddr<'_>,
        scratch: &mut [u8],
    ) -> Poll<Result<usize>> {
        if let TargetAddr::Domain(domain, _) = target {
            if domain.len() > 255 {
                return Poll::Ready(Err(Error::InvalidTargetAddress("overlong domain")));
            }
        }
        if scratch.len() < buf.len() + MAX_HEADER_LEN {
            return Poll::Ready(Err(Error::Io(io::Error::new(
                io::ErrorKind::InvalidInput,
                "scratch buffer too small to encapsulate datagram",
            ))));
        }
        let header_len = encode_udp_header(scratch, target);
        let total = header_len + buf.len();
        scratch[header_len..total].copy_from_slice(buf);

        let sent = ready!(
            self.socket
                .poll_send_to(cx, &scratch[..total], self.relay_addr)
        )?;
        if sent != total {
            return Poll::Ready(Err(Error::Io(io::Error::new(
                io::ErrorKind::WriteZero,
                "SOCKS UDP datagram was only partially sent",
            ))));
        }
        Poll::Ready(Ok(buf.len()))
    }

    /// Sends `buf` to `target` through the proxy, returning the number of
    /// payload bytes sent.
    ///
    /// `target` is the final destination of the datagram; the SOCKS UDP header
    /// is added automatically.
    pub async fn send_to<'t, T>(&self, buf: &[u8], target: T) -> Result<usize>
    where
        T: IntoTargetAddr<'t>,
    {
        let target = target.into_target_addr()?;
        let mut scratch = vec![0u8; buf.len() + MAX_HEADER_LEN];
        poll_fn(|cx| self.poll_send_to(cx, buf, &target, &mut scratch)).await
    }

    /// Attempts to receive a single datagram through the proxy without blocking,
    /// returning the payload length and the datagram's source address.
    ///
    /// The SOCKS UDP header is stripped and the payload is left in `buf[..len]`,
    /// so `buf` must be large enough to hold both header and payload. A datagram
    /// that exactly fills `buf` is assumed truncated and returned as an error;
    /// size `buf` to at least [`MAX_DATAGRAM_LEN`] to avoid this.
    ///
    /// Datagrams that are fragmented, malformed, or not from the relay's source
    /// IP are dropped; only socket errors are returned.
    pub fn poll_recv_from(
        &self,
        cx: &mut Context<'_>,
        buf: &mut [u8],
    ) -> Poll<Result<(usize, SocketAddr)>> {
        if buf.is_empty() {
            return Poll::Ready(Err(Error::Io(io::Error::new(
                io::ErrorKind::InvalidInput,
                "receive buffer is empty",
            ))));
        }
        loop {
            let (n, src_relay) = ready!(self.socket.poll_recv_from(cx, buf))?;
            // Drop datagrams not from the relay (matched on IP only)
            if src_relay.ip() != self.relay_addr.ip() {
                continue;
            }
            // A datagram that exactly fills `buf` was likely truncated
            if n == buf.len() {
                return Poll::Ready(Err(Error::Io(io::Error::new(
                    io::ErrorKind::Other,
                    "SOCKS UDP datagram truncated: receive buffer too small",
                ))));
            }
            match decode_udp_header(&buf[..n]) {
                Ok(Some((src, data_offset))) => {
                    let payload_len = n - data_offset;
                    buf.copy_within(data_offset..n, 0);
                    return Poll::Ready(Ok((payload_len, src)));
                }
                // Fragmented or malformed; drop and wait for the next one
                _ => continue,
            }
        }
    }

    /// Receives a single datagram through the proxy, writing the payload into
    /// `buf` and returning the number of payload bytes and the source address.
    ///
    /// `buf` must be large enough to hold the SOCKS UDP header plus the payload;
    /// prefer at least [`MAX_DATAGRAM_LEN`], or use
    /// [`recv_datagram`](Socks5Datagram::recv_datagram) to avoid sizing it
    /// yourself. See [`poll_recv_from`](Socks5Datagram::poll_recv_from) for the
    /// handling of fragmented, malformed and truncated datagrams.
    pub async fn recv_from(&self, buf: &mut [u8]) -> Result<(usize, SocketAddr)> {
        poll_fn(|cx| self.poll_recv_from(cx, buf)).await
    }

    /// Receives a single datagram through the proxy, returning the payload as an
    /// owned `Vec` together with the source address.
    ///
    /// Unlike [`recv_from`](Socks5Datagram::recv_from) this cannot truncate the
    /// payload, as the buffer is sized to hold any UDP datagram.
    pub async fn recv_datagram(&self) -> Result<(Vec<u8>, SocketAddr)> {
        let mut buf = vec![0u8; MAX_DATAGRAM_LEN];
        let (len, src) = self.recv_from(&mut buf).await?;
        buf.truncate(len);
        Ok((buf, src))
    }

    /// Returns the proxy relay endpoint that encapsulated datagrams are sent to.
    pub fn proxy_addr(&self) -> SocketAddr {
        self.relay_addr
    }

    /// Returns the local address that the UDP socket is bound to.
    pub fn local_addr(&self) -> Result<SocketAddr> {
        Ok(self.socket.local_addr()?)
    }
}

fn resolve_relay_addr<S>(
    control: &Socks5Stream<S>,
    proxy_host: Option<IpAddr>,
) -> Result<SocketAddr>
where
    S: AsyncSocket + Unpin,
{
    let mut relay_addr = match control.target_addr() {
        TargetAddr::Ip(addr) => addr,
        TargetAddr::Domain(_, _) => {
            return Err(Error::InvalidTargetAddress(
                "proxy returned a domain as the UDP relay address",
            ));
        }
    };

    if relay_addr.ip().is_unspecified() {
        match proxy_host {
            Some(host) => relay_addr.set_ip(host),
            None => {
                return Err(Error::InvalidTargetAddress(
                    "proxy returned an unspecified UDP relay address",
                ));
            }
        }
    }
    Ok(relay_addr)
}

fn encode_udp_header(buf: &mut [u8], target: &TargetAddr<'_>) -> usize {
    // RSV
    buf[0] = 0x00;
    buf[1] = 0x00;
    // FRAG
    buf[2] = 0x00;
    match target {
        TargetAddr::Ip(SocketAddr::V4(addr)) => {
            buf[3] = 0x01;
            buf[4..8].copy_from_slice(&addr.ip().octets());
            buf[8..10].copy_from_slice(&addr.port().to_be_bytes());
            10
        }
        TargetAddr::Ip(SocketAddr::V6(addr)) => {
            buf[3] = 0x04;
            buf[4..20].copy_from_slice(&addr.ip().octets());
            buf[20..22].copy_from_slice(&addr.port().to_be_bytes());
            22
        }
        TargetAddr::Domain(domain, port) => {
            let domain = domain.as_bytes();
            let len = domain.len();
            buf[3] = 0x03;
            buf[4] = len as u8;
            buf[5..5 + len].copy_from_slice(domain);
            buf[5 + len..7 + len].copy_from_slice(&port.to_be_bytes());
            7 + len
        }
    }
}

fn decode_udp_header(packet: &[u8]) -> Result<Option<(SocketAddr, usize)>> {
    if packet.len() < 4 {
        return Err(Error::Io(io::Error::new(
            io::ErrorKind::UnexpectedEof,
            "SOCKS UDP datagram shorter than its header",
        )));
    }
    if packet[0] != 0x00 || packet[1] != 0x00 {
        return Err(Error::InvalidReservedByte);
    }
    // FRAG != 0: fragmented, caller drops it
    if packet[2] != 0x00 {
        return Ok(None);
    }

    match packet[3] {
        // IPv4
        0x01 => {
            if packet.len() < 10 {
                return Err(truncated());
            }
            let ip = Ipv4Addr::new(packet[4], packet[5], packet[6], packet[7]);
            let port = u16::from_be_bytes([packet[8], packet[9]]);
            Ok(Some((SocketAddr::from((ip, port)), 10)))
        }
        // IPv6
        0x04 => {
            if packet.len() < 22 {
                return Err(truncated());
            }
            let mut octets = [0u8; 16];
            octets.copy_from_slice(&packet[4..20]);
            let ip = Ipv6Addr::from(octets);
            let port = u16::from_be_bytes([packet[20], packet[21]]);
            Ok(Some((SocketAddr::from((ip, port)), 22)))
        }
        // Domain
        0x03 => Err(Error::InvalidTargetAddress(
            "proxy returned a domain as the UDP datagram source",
        )),
        _ => Err(Error::UnknownAddressType),
    }
}

fn truncated() -> Error {
    Error::Io(io::Error::new(
        io::ErrorKind::UnexpectedEof,
        "SOCKS UDP datagram address truncated",
    ))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn encode_decode_ipv4_roundtrip() {
        let target = TargetAddr::Ip("1.2.3.4:53".parse().unwrap());
        let mut buf = vec![0u8; MAX_HEADER_LEN];
        let len = encode_udp_header(&mut buf, &target);
        assert_eq!(len, 10);
        let (src, off) = decode_udp_header(&buf[..len]).unwrap().unwrap();
        assert_eq!(off, 10);
        assert_eq!(src, "1.2.3.4:53".parse().unwrap());
    }

    #[test]
    fn encode_decode_ipv6_roundtrip() {
        let target = TargetAddr::Ip("[2001:db8::1]:443".parse().unwrap());
        let mut buf = vec![0u8; MAX_HEADER_LEN];
        let len = encode_udp_header(&mut buf, &target);
        assert_eq!(len, 22);
        let (src, off) = decode_udp_header(&buf[..len]).unwrap().unwrap();
        assert_eq!(off, 22);
        assert_eq!(src, "[2001:db8::1]:443".parse().unwrap());
    }

    #[test]
    fn encode_domain_header() {
        let target = TargetAddr::Domain("example.com".into(), 80);
        let mut buf = vec![0u8; MAX_HEADER_LEN];
        let len = encode_udp_header(&mut buf, &target);
        // 2(rsv)+1(frag)+1(atyp)+1(len)+11(domain)+2(port)
        assert_eq!(len, 18);
        assert_eq!(buf[3], 0x03);
        assert_eq!(buf[4], 11);
        assert_eq!(&buf[5..16], b"example.com");
    }

    #[test]
    fn fragmented_datagram_is_dropped() {
        // RSV=0, FRAG=1, ATYP=IPv4, addr, port
        let packet = [0, 0, 1, 0x01, 1, 2, 3, 4, 0, 53];
        assert!(decode_udp_header(&packet).unwrap().is_none());
    }

    #[test]
    fn bad_reserved_byte_errors() {
        let packet = [0, 1, 0, 0x01, 1, 2, 3, 4, 0, 53];
        assert!(matches!(
            decode_udp_header(&packet),
            Err(Error::InvalidReservedByte)
        ));
    }

    #[test]
    fn truncated_header_errors() {
        let packet = [0, 0, 0]; // shorter than 4 bytes
        assert!(decode_udp_header(&packet).is_err());
    }

    #[test]
    fn unknown_atyp_errors() {
        let packet = [0, 0, 0, 0x09, 1, 2, 3, 4, 0, 53];
        assert!(matches!(
            decode_udp_header(&packet),
            Err(Error::UnknownAddressType)
        ));
    }
}
