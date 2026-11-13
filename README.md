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

Domains (`miki.me.uk`, `www.miki.me.uk`) are Worker custom domains set in
`wrangler.jsonc`; Cloudflare manages their DNS records.
