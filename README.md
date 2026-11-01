# bodgingbear.dev

Bodging Bear team website. Next.js static export (`output: "export"`) served by a Cloudflare Worker with static assets.

## Development

```bash
pnpm install
pnpm dev
```

## Deployment

Deployed to the **Bodging Bear** Cloudflare account as the `bodgingbear-site` Worker on the `bodgingbear.dev` custom domain.

```bash
pnpm build
npx wrangler deploy
```

Games are **not** part of this repo. Each game repo deploys its own Worker that owns the route
`bodgingbear.dev/projects/<id>/play*`, so the game is served at `https://bodgingbear.dev/projects/<id>/play/`.
To link a game, set `playNowUrl: "/projects/<id>/play/"` in its `app/projects/(n)/<id>/page.mdx`.

## Analytics proxy

`analytics-proxy/` is a separate Worker (`bb-analytics-proxy`) on `analytics.bodgingbear.dev` that forwards the
Matomo tracker endpoints to `analytics.legiec.info` (a DNS CNAME can't cross Cloudflare accounts). Deploy it manually:

```bash
cd analytics-proxy && npx wrangler deploy
```
