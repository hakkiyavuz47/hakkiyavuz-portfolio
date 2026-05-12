# Hakkı Yavuz — Portfolio

Static portfolio site for Hakkı Yavuz (İstanbul, hibrit fotoğrafçılık). Vite + React, deployed to Cloudflare Workers Static Assets, custom domain `hakkiyavuz.com.tr`.

## Stack

- **Vite 6** + **React 18** + TypeScript
- **Cloudflare Workers (Static Assets)** — serves `dist/` from the edge, no compute layer
- Contact = WhatsApp deep link (no backend, no form)

## Local dev

```sh
npm install
npm run dev          # http://localhost:5173
npm run build        # produces dist/
npm run preview      # serve the production build locally
```

## Deploy to Cloudflare

Worker name: `hakkiyavuz-portfolio` · Account: `Hakkiyavuz47@gmail.com's Account` · Custom domains: `hakkiyavuz.com.tr`, `www.hakkiyavuz.com.tr`.

```sh
# Scoped API token with: Workers Scripts: Edit, DNS: Edit (zone), Account Settings: Read
export CLOUDFLARE_API_TOKEN="<your-token>"
export CLOUDFLARE_ACCOUNT_ID="4d0cc02cb708fc27cff4d911c2986bcc"

npm run deploy
```

The `deploy` script runs `tsc -b && vite build && wrangler deploy`. Wrangler uploads `dist/` as the asset bundle. The custom domain attachment was done once via the Cloudflare API (see commit history); subsequent deploys just push new asset bundles to the existing Worker.

### Re-attaching the custom domain (only needed if it gets detached)

```sh
ZONE=$(curl -s -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  "https://api.cloudflare.com/client/v4/zones?name=hakkiyavuz.com.tr" \
  | jq -r '.result[0].id')

for HOST in hakkiyavuz.com.tr www.hakkiyavuz.com.tr; do
  curl -X PUT "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/workers/domains" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"environment\":\"production\",\"hostname\":\"$HOST\",\"service\":\"hakkiyavuz-portfolio\",\"zone_id\":\"$ZONE\"}"
done
```

## Project layout

```
src/
  App.tsx              # root composition: nav + sections + footer
  main.tsx             # React entry
  data.ts              # all copy + image URLs (local /images/* + Unsplash)
  styles.css           # ported verbatim from the design bundle + Contact CTA
  components/          # Hero, About, Bento, Marquee, Hibrit, Gallery,
                       # Process, Contact, Footer, Cursor
  lib/                 # useReveal, splitChars
public/
  hakki-yavuz-profile.jpeg   # About portrait
  images/                    # Hakkı's editorial shots (originally Wix CDN)
index.html
wrangler.jsonc
```

## Updating content

Almost everything user-facing lives in `src/data.ts` — service copy, gallery items, hibrit-vision steps, process steps, about bio, hero images. WhatsApp + phone numbers live in `src/components/Contact.tsx` and `src/App.tsx` (floating button + footer).

## Replacing placeholder images

The gallery mixes Hakkı's real shots (now bundled in `public/images/`) with Unsplash placeholders for the Düğün/Mezuniyet categories. Items marked `concept: true` show a "Konsept" badge — swap their `image` URL in `src/data.ts` once real shots exist. New shots: drop the JPEG in `public/images/<id>.jpg` and reference via `wix("<id>")` (helper resolves to `/images/<id>.jpg`).
