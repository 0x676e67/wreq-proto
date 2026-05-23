# wreq-socks

[![Build Status](https://github.com/sticnarf/wreq-socks/actions/workflows/main.yml/badge.svg)](https://github.com/sticnarf/wreq-socks/actions)
[![Crates Version](https://img.shields.io/crates/v/wreq-socks.svg)](https://crates.io/crates/wreq-socks)
[![docs](https://docs.rs/wreq-socks/badge.svg)](https://docs.rs/wreq-socks)

Asynchronous SOCKS proxy support for Rust.

## Features

- [x] `CONNECT` command
- [x] `BIND` command
- [ ] `ASSOCIATE` command
- [x] Username/password authentication
- [ ] GSSAPI authentication
- [ ] Asynchronous DNS resolution
- [X] Chain proxies ([see example](examples/chainproxy.rs))
- [X] SOCKS4

## Compatibility with Other Async Runtimes

By default, the `tokio` feature is enabled, as the crate name suggests.

Users can opt out `tokio` by setting `default-features = false`. The `*_with_socket` functions accept types implementing the `AsyncSocket` trait.

The crate provides `io::Compat` that implements `AsyncSocket` for `futures-io` types (requiring the `futures-io` feature).

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

## Acknowledgments

* [sfackler/rust-socks](https://github.com/sfackler/rust-socks)
