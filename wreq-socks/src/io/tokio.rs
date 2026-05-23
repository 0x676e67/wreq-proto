//! AsyncSocket trait implementation for tokio's AsyncRead + AsyncWrite
//! traits.
use std::{
    io::Result as IoResult,
    net::SocketAddr,
    pin::Pin,
    task::{Context, Poll},
};

use futures_util::ready;
use tokio::io::{AsyncRead, AsyncWrite, ReadBuf};

use super::{AsyncSocket, AsyncUdpSocket};

impl<S> AsyncSocket for S
where
    S: AsyncRead + AsyncWrite,
{
    fn poll_read(
        self: Pin<&mut Self>,
        cx: &mut Context<'_>,
        buf: &mut [u8],
    ) -> Poll<IoResult<usize>> {
        let mut buf = ReadBuf::new(buf);
        ready!(AsyncRead::poll_read(self, cx, &mut buf))?;
        Poll::Ready(Ok(buf.filled().len()))
    }

    fn poll_write(self: Pin<&mut Self>, cx: &mut Context<'_>, buf: &[u8]) -> Poll<IoResult<usize>> {
        AsyncWrite::poll_write(self, cx, buf)
    }
}

impl AsyncUdpSocket for tokio::net::UdpSocket {
    fn poll_send_to(
        &self,
        cx: &mut Context<'_>,
        buf: &[u8],
        target: SocketAddr,
    ) -> Poll<IoResult<usize>> {
        tokio::net::UdpSocket::poll_send_to(self, cx, buf, target)
    }

    fn poll_recv_from(
        &self,
        cx: &mut Context<'_>,
        buf: &mut [u8],
    ) -> Poll<IoResult<(usize, SocketAddr)>> {
        let mut read_buf = ReadBuf::new(buf);
        let addr = ready!(tokio::net::UdpSocket::poll_recv_from(
            self,
            cx,
            &mut read_buf
        ))?;
        Poll::Ready(Ok((read_buf.filled().len(), addr)))
    }

    fn local_addr(&self) -> IoResult<SocketAddr> {
        tokio::net::UdpSocket::local_addr(self)
    }
}
