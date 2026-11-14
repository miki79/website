# miki.me.uk

Static site served from Cloudflare Workers (static assets, no Worker code).

- `public/` is everything that gets deployed
- `public/tabs.js` switches the JavaScript / Java / Python snippet
- When you change `styles.css` or `tabs.js`, bump `?v=` in the HTML

## Local

    npm install
    npm run dev        # http://localhost:8787

## Deploying

Pushing to `main` deploys automatically: the Worker `miki-me-uk` is connected
to this repo with Cloudflare Workers Builds (deploy command `npx wrangler deploy`).
Build logs: Cloudflare dashboard, Workers & Pages, miki-me-uk, Deployments.

Manual deploy, if ever needed: `npx wrangler login`, then `npm run deploy`.

Domains are Worker custom domains set in `wrangler.jsonc`; Cloudflare manages
their DNS records. `miki.me.uk` and `www` serve the site. `giardi.net` and `www`
301-redirect to https://miki.me.uk (keeping path and query) via `src/worker.js`.

To add another alias domain: add it to `routes` in `wrangler.jsonc` and to
`REDIRECT_HOSTS` in `src/worker.js`, then push. The domain's zone must be in
the same Cloudflare account, with no existing DNS record for that hostname.
