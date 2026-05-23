//! Send a UDP datagram through a SOCKS5 proxy using UDP associate.
//!
//! This example requires a SOCKS5 proxy with UDP support. It sends a DNS query
//! for `example.com` to `8.8.8.8:53` over UDP through the proxy.

use std::time::Duration;

use tokio::{runtime::Runtime, time::timeout};
use wreq_socks::{Error, udp::Socks5Datagram};

const PROXY_ADDR: &str = "127.0.0.1:1080";
const DNS_SERVER: &str = "8.8.8.8:53";

/// A minimal DNS query for `example.com` (type A, class IN), transaction id
/// `0x1234`, recursion desired.
fn dns_query_example_com() -> Vec<u8> {
    let mut q = Vec::new();
    q.extend_from_slice(&[0x12, 0x34]); // ID
    q.extend_from_slice(&[0x01, 0x00]); // flags: RD
    q.extend_from_slice(&[0x00, 0x01]); // QDCOUNT = 1
    q.extend_from_slice(&[0x00, 0x00]); // ANCOUNT
    q.extend_from_slice(&[0x00, 0x00]); // NSCOUNT
    q.extend_from_slice(&[0x00, 0x00]); // ARCOUNT
    for label in ["example", "com"] {
        q.push(label.len() as u8);
        q.extend_from_slice(label.as_bytes());
    }
    q.push(0x00); // end of name
    q.extend_from_slice(&[0x00, 0x01]); // QTYPE = A
    q.extend_from_slice(&[0x00, 0x01]); // QCLASS = IN
    q
}

async fn run() -> Result<(), Error> {
    // `0.0.0.0:0`: we don't know the local address we'll send from yet
    let udp = Socks5Datagram::associate(PROXY_ADDR, "0.0.0.0:0").await?;
    println!("UDP relay endpoint: {}", udp.proxy_addr());

    let query = dns_query_example_com();
    let sent = udp.send_to(&query, DNS_SERVER).await?;
    println!("sent {sent} bytes to {DNS_SERVER}");

    let mut buf = [0u8; 1500];
    let (n, from) = timeout(Duration::from_secs(5), udp.recv_from(&mut buf))
        .await
        .map_err(|_| {
            Error::Io(std::io::Error::new(
                std::io::ErrorKind::TimedOut,
                "no DNS reply within 5s",
            ))
        })??;

    println!("received {n} bytes from {from}:");
    println!("{:02x?}", &buf[..n]);
    Ok(())
}

fn main() {
    let rt = Runtime::new().unwrap();
    rt.block_on(run()).unwrap();
}
