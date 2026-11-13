# miki.me.uk

Static site served from Cloudflare Workers (static assets, no Worker code).

- `public/` is everything that gets deployed
- `public/tabs.js` switches the JavaScript / Java / Python snippet
- When you change `styles.css` or `tabs.js`, bump `?v=` in the HTML

## Local

    npm install
    npm run dev        # http://localhost:8787

## Moving from Netlify to Cloudflare

1. `npx wrangler login`, then `npm run deploy`. Check the `*.workers.dev` URL it prints.
2. In `wrangler.jsonc`, uncomment the `routes` custom-domain line and run `npm run deploy` again.
   The DNS zone is already on Cloudflare, which replaces the old Netlify record when you confirm.
   (Or use Workers & Pages → miki-me-uk → Settings → Domains → Add custom domain.)
3. Check that https://miki.me.uk serves the new page (no `x-nf-request-id` header).
4. Shut down Netlify (it deploys from github.com/miki79/website through the Netlify GitHub App):
   - Netlify → the miki.me.uk site → Site configuration → Danger zone → Delete site
     (this also removes miki.me.uk as a custom domain there)
   - GitHub → Settings → Applications → Netlify: remove its access to `miki79/website`
   - Optionally archive the old repo: `gh repo archive miki79/website`
