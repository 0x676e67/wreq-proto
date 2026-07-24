use std::{ops::Deref, sync::Arc};

use http::{HeaderMap, HeaderValue, Method, Request, Uri, Version};

/// Registers a callback that runs after protocol headers are prepared and
/// immediately before the request headers are encoded.
///
/// # Example
///
/// ```
/// use http::HeaderValue;
/// use wreq_proto::ext::{on_request, RequestContext};
///
/// let mut request = http::Request::new(());
/// on_request(&mut request, |request: &mut RequestContext<'_>| {
///     request
///         .headers_mut()
///         .insert("x-request-id", HeaderValue::from_static("example"));
/// });
/// ```
#[inline]
pub fn on_request<B, C>(request: &mut Request<B>, callback: C)
where
    C: OnRequestCallback,
{
    request
        .extensions_mut()
        .insert(OnRequest(Arc::new(callback)));
}

/// A callback for observing or changing a request before it is encoded.
pub trait OnRequestCallback: Send + Sync + 'static {
    /// Observes or changes the finalized request head.
    ///
    /// HTTP/1 calls this through the default [`Self::write_headers`]
    /// implementation.
    fn call(&self, request: &mut RequestContext<'_>);

    /// Writes HTTP/1 headers in their final order and casing.
    ///
    /// The default implementation calls [`Self::call`] and writes the resulting
    /// header map. Override this method only when custom HTTP/1 header casing or
    /// ordering is required. An override replaces [`Self::call`] and must pass
    /// every header to `write_header`.
    fn write_headers(
        &self,
        request: &mut RequestContext<'_>,
        write_header: &mut dyn FnMut(&[u8], &HeaderValue),
    ) {
        self.call(request);
        for (name, value) in request.headers().iter() {
            write_header(name.as_ref(), value);
        }
    }
}

impl<F> OnRequestCallback for F
where
    F: for<'a> Fn(&mut RequestContext<'a>) + Send + Sync + 'static,
{
    #[inline]
    fn call(&self, request: &mut RequestContext<'_>) {
        (self)(request);
    }
}

/// A request head passed to an [`OnRequestCallback`].
///
/// Request metadata is read-only because the transport has already been
/// selected. Headers may be inspected, reordered, added, changed, or removed.
/// The request body is not exposed.
pub struct RequestContext<'a> {
    method: &'a Method,
    uri: &'a Uri,
    version: Version,
    headers: &'a mut HeaderMap,
}

impl<'a> RequestContext<'a> {
    pub(crate) fn new(
        method: &'a Method,
        uri: &'a Uri,
        version: Version,
        headers: &'a mut HeaderMap,
    ) -> Self {
        Self {
            method,
            uri,
            version,
            headers,
        }
    }

    /// Returns the request method.
    #[inline]
    pub fn method(&self) -> &Method {
        self.method
    }

    /// Returns the request URI.
    #[inline]
    pub fn uri(&self) -> &Uri {
        self.uri
    }

    /// Returns the HTTP version used to encode the request.
    #[inline]
    pub fn version(&self) -> Version {
        self.version
    }

    /// Returns the request headers.
    #[inline]
    pub fn headers(&self) -> &HeaderMap {
        self.headers
    }

    /// Returns mutable request headers.
    #[inline]
    pub fn headers_mut(&mut self) -> &mut HeaderMap {
        self.headers
    }
}

#[derive(Clone)]
pub(crate) struct OnRequest(Arc<dyn OnRequestCallback>);

impl Deref for OnRequest {
    type Target = dyn OnRequestCallback;

    #[inline]
    fn deref(&self) -> &Self::Target {
        self.0.as_ref()
    }
}
