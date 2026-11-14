// Every request lands here first (run_worker_first), so we can redirect
// alias domains before falling through to the static site in ./public.

const CANONICAL = 'https://miki.me.uk';

// Domains that should permanently redirect to the canonical site.
const REDIRECT_HOSTS = new Set(['giardi.net', 'www.giardi.net']);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (REDIRECT_HOSTS.has(url.hostname)) {
      return Response.redirect(CANONICAL + url.pathname + url.search, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
