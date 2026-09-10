# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0](https://github.com/0x676e67/wreq-proto/compare/wreq-proto-v0.2.5...wreq-proto-v0.3.0) - 2026-09-10

### Added

- *(http2)* add  `reset_stream_duration()` client option ([#49](https://github.com/0x676e67/wreq-proto/pull/49))
- *(client)* add HTTP/2 `max_local_error_reset_streams` option ([#47](https://github.com/0x676e67/wreq-proto/pull/47))
- *(error)* add `Error::is_shutdown()` ([#45](https://github.com/0x676e67/wreq-proto/pull/45))
- *(client)* add a `TrySendError::error()` method ([#44](https://github.com/0x676e67/wreq-proto/pull/44))
- *(client)* add a `TrySendError::message()` method ([#43](https://github.com/0x676e67/wreq-proto/pull/43))
- *(client)* implement the HTTP/2 extended CONNECT protocol from RFC 8441 ([#41](https://github.com/0x676e67/wreq-proto/pull/41))
- *(client)* implement Eq and Hash for HTTP options ([#37](https://github.com/0x676e67/wreq-proto/pull/37))
- *(client)* expose HTTP/2 current max stream count ([#35](https://github.com/0x676e67/wreq-proto/pull/35))

### Fixed

- *(http1)* use append for repeat trailers ([#55](https://github.com/0x676e67/wreq-proto/pull/55))
- *(http1)* flush buffered data before shutdown ([#54](https://github.com/0x676e67/wreq-proto/pull/54))
- *(http1)* more strictly enforce max_buf_size when parsing ([#53](https://github.com/0x676e67/wreq-proto/pull/53))
- *(http2)* avoid buffering `Upgraded` writes without send capacity ([#40](https://github.com/0x676e67/wreq-proto/pull/40))
- *(http2)* fix internals of HTTP/2 CONNECT upgrades ([#38](https://github.com/0x676e67/wreq-proto/pull/38))

### Other

- Update README
- style(lib); fix 'undocumented_unsafe_blocks' lint ([#52](https://github.com/0x676e67/wreq-proto/pull/52))
- *(error)* add detailed doc comments to Error query methods ([#51](https://github.com/0x676e67/wreq-proto/pull/51))
- *(client)* document cancel safety for client send_request futures ([#50](https://github.com/0x676e67/wreq-proto/pull/50))
- *(client)* document Drop behavior for Connection types ([#48](https://github.com/0x676e67/wreq-proto/pull/48))
- *(error)* add more information about `is_incomplete_message()` ([#46](https://github.com/0x676e67/wreq-proto/pull/46))
- improve `ext` module overview and `Protocol` docs ([#42](https://github.com/0x676e67/wreq-proto/pull/42))
- Update README.md with license section
- Add FAQ section to README

## [0.2.5](https://github.com/0x676e67/wreq-proto/compare/wreq-proto-v0.2.4...wreq-proto-v0.2.5) - 2026-05-31

### Fixed

- *(http1)* fix busy loop when peer half-closes and open body ([#27](https://github.com/0x676e67/wreq-proto/pull/27))

### Other

- Update README.md
- Update README.md

## [0.2.4](https://github.com/0x676e67/wreq-proto/compare/wreq-proto-v0.2.3...wreq-proto-v0.2.4) - 2026-05-20

### Other

- *(lib)* replace unwraps with expects ([#22](https://github.com/0x676e67/wreq-proto/pull/22))
- *(lib)* use a panic_if_poisoned() helper for mutexes ([#21](https://github.com/0x676e67/wreq-proto/pull/21))

## [0.2.3](https://github.com/0x676e67/wreq-proto/compare/wreq-proto-v0.2.2...wreq-proto-v0.2.3) - 2026-05-10

### Other

- fmt deps
- fmt Cargo.toml
- Add wreq-rt ([#17](https://github.com/0x676e67/wreq-proto/pull/17))
