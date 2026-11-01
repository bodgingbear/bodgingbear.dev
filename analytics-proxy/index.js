// analytics.bodgingbear.dev → Matomo at analytics.legiec.info.
// The Matomo host is proxied by Cloudflare in another account, so a DNS CNAME
// would fail with error 1014 (cross-account CNAME). Proxying via a Worker works.
// Only the tracker endpoints are exposed; the Matomo UI stays on its own domain.
const UPSTREAM = "https://analytics.legiec.info";
const TRACKER_PATHS = new Set(["/matomo.js", "/matomo.php", "/piwik.js", "/piwik.php", "/js/", "/js/tracker.php"]);

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (!TRACKER_PATHS.has(url.pathname)) {
      return Response.redirect(UPSTREAM + "/", 302);
    }

    const headers = new Headers(request.headers);
    // Pass the real visitor IP on; Matomo reads it via proxy_client_headers.
    const ip = request.headers.get("CF-Connecting-IP");
    if (ip) {
      headers.set("X-Forwarded-For", ip);
      headers.set("X-Real-IP", ip);
    }

    return fetch(new URL(url.pathname + url.search, UPSTREAM), {
      method: request.method,
      headers,
      body: request.body,
      redirect: "manual",
    });
  },
};
