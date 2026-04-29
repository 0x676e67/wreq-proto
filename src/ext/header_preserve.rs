use std::sync::Arc;

use http::HeaderMap;

#[derive(Clone)]
pub(crate) struct OnHeaderSort(Arc<dyn OnPreserveHeaderCallback>);

/// Registers a callback to customize header order and casing before sending a request.
///
/// # Example
/// ```
/// use wreq_proto::ext::{on_preserve_header, OnPreserveHeaderCallback};
///
/// struct HeaderPreserver;
///
/// impl OnPreserveHeaderCallback for HeaderPreserver {
///
///   fn call(&self, headers: &mut http::HeaderMap) {
///     // Modify or sort headers as needed before serialization
///   }
///
///   fn call_for_each(&self, headers: &mut http::HeaderMap, dst: &mut dyn FnMut(&[u8], &http::HeaderValue)) {
///     // Write headers with custom casing/order
///   }
/// }
///
/// let mut req = http::Request::new(());
/// on_preserve_header(&mut req, HeaderPreserver);
/// ```
#[inline]
pub fn on_preserve_header<B, C>(req: &mut http::Request<B>, callback: C)
where
    C: OnPreserveHeaderCallback,
{
    req.extensions_mut()
        .insert(OnHeaderSort(Arc::new(callback)));
}

/// Trait for custom header preservation callback.
///
/// Implement this trait to define custom behavior for:
/// 1. Modifying/sorting headers before serialization (`call`)
/// 2. Writing headers with custom casing/order (`call_for_each`)
///
/// The default implementation of `call_for_each` will use the modified headers
/// from `call` and write them with standard HTTP casing rules. Override
/// `call_for_each` to implement custom header writing logic.
///
/// # Safety
///
/// Implementations must be `Sync + Send` to support use in async contexts, and
/// must not panic (panics will propagate during request serialization).
pub trait OnPreserveHeaderCallback: Sync + Send + 'static {
    /// Modify or sort headers before they are written to the request.
    ///
    /// This method is called first during header processing - use it to mutate
    /// the header map (sort, add, remove, or modify values) before serialization.
    fn call(&self, headers: &mut HeaderMap);

    /// Write headers with custom casing/order to the output stream.
    ///
    /// This method is called to serialize headers to the wire format. The provided
    /// `dst` closure should be called for each header, with the header name (as bytes)
    /// and value. Use this to enforce custom casing (e.g. `Content-Type` instead of
    /// `content-type`) or non-standard header order.
    fn call_for_each(
        &self,
        headers: &mut HeaderMap,
        dst: &mut dyn FnMut(&[u8], &http::HeaderValue),
    );
}

impl OnHeaderSort {
    /// Execute the registered header modification callback.
    ///
    /// This is called internally during request serialization to apply
    /// the user's header modifications before writing headers to the wire.
    #[inline]
    pub(crate) fn call(&self, headers: &mut HeaderMap) {
        self.0.call(headers);
    }

    /// Execute the registered header writing callback.
    ///
    /// This is called internally during request serialization to write
    /// headers with the user's custom casing/order logic.
    #[inline]
    pub(crate) fn call_for_each<F>(&self, headers: &mut HeaderMap, mut dst: F)
    where
        F: FnMut(&[u8], &http::HeaderValue),
    {
        self.0.call_for_each(headers, &mut dst);
    }
}
