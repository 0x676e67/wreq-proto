#![allow(dead_code)]
mod support;

use bytes::Bytes;
use http_body_util::Empty;
use tokio::io::AsyncReadExt;
use wreq_proto::{conn, http2::Http2Options};

async fn initial_settings(opts: Http2Options) -> Vec<u8> {
    let (client, mut peer) = tokio::io::duplex(4096);
    let (_send, connection) = conn::http2::Builder::new(support::rt::TokioExecutor::new())
        .options(opts)
        .handshake::<_, Empty<Bytes>>(client)
        .await
        .unwrap();
    let task = tokio::spawn(connection);
    let result = tokio::time::timeout(std::time::Duration::from_secs(5), async {
        let mut preface = [0; 24];
        peer.read_exact(&mut preface).await.unwrap();
        assert_eq!(&preface, b"PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n");
        let mut header = [0; 9];
        peer.read_exact(&mut header).await.unwrap();
        assert_eq!(&header[3..], &[4, 0, 0, 0, 0, 0]);
        let len = u32::from_be_bytes([0, header[0], header[1], header[2]]) as usize;
        let mut payload = vec![0; len];
        peer.read_exact(&mut payload).await.unwrap();
        payload
    })
    .await;
    task.abort();
    result.unwrap()
}

#[tokio::test]
async fn omission_and_explicit_default_have_distinct_wire_settings() {
    let base = || {
        Http2Options::builder()
            .enable_push(false)
            .initial_window_size(65_535)
    };
    assert_eq!(
        initial_settings(base().build()).await,
        [0, 2, 0, 0, 0, 0, 0, 4, 0, 0, 255, 255]
    );
    assert_eq!(
        initial_settings(base().omit_initial_window_size(true).build()).await,
        [0, 2, 0, 0, 0, 0]
    );
}

#[tokio::test]
async fn omission_overrides_adaptive_and_window_regardless_of_order() {
    let opts = Http2Options::builder()
        .omit_initial_window_size(true)
        .initial_window_size(1_000_000)
        .adaptive_window(true)
        .enable_push(false)
        .build();
    assert_eq!(initial_settings(opts).await, [0, 2, 0, 0, 0, 0]);
}

#[tokio::test]
async fn omission_can_be_disabled_again() {
    let opts = Http2Options::builder()
        .omit_initial_window_size(true)
        .omit_initial_window_size(false)
        .initial_window_size(100_000)
        .enable_push(false)
        .build();
    assert_eq!(
        initial_settings(opts).await,
        [0, 2, 0, 0, 0, 0, 0, 4, 0, 1, 134, 160]
    );
}
