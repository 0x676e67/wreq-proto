//! Extensions for HTTP messages in wreq_proto.

mod h1_reason_phrase;
mod header_preserve;
mod informational;

pub use self::{
    h1_reason_phrase::ReasonPhrase,
    header_preserve::{on_preserve_header, OnPreserveHeaderCallback},
    informational::on_informational,
};
pub(crate) use self::{header_preserve::OnHeaderSort, informational::OnInformational};
