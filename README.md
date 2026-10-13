# VINO TV — unattended playback, version 3

## Update GitHub

Unzip `vino-gym-tv-auto-v3.zip`. In https://github.com/al13ert/Vino-Gym choose Add file → Upload files and upload all contents directly to the root, replacing matching filenames. Include `auto-tv.js`, `assets/hls.min.js` and all other assets. Commit and wait for deployment, then open https://al13ert.github.io/Vino-Gym/?v=3 . On a Mac reset zoom with Command+0 and refresh with Command+Shift+R. No deletion of the repository is needed. This package has not been uploaded on your behalf.

## No channel selection required

Default: the direct stream labeled CNA in your supplied code starts automatically in the large video panel. News headlines, market widgets and rotating VINO promotions remain alongside it. No channel tabs or video controls need selecting. Playback is muted to support browser autoplay. Fullscreen is still a browser/TV setting; websites cannot force fullscreen without a user gesture. Set fullscreen once through the TV/browser menu. A browser that blocks even muted autoplay needs its autoplay permission configured once.

The video automatically retries failures with increasing delays up to 60 seconds, detects a stream that stops advancing, and reconnects after network restoration. Connection, buffering and failure messages appear instead of claiming successful playback. PLAYING means the browser reports playback, not independently verified event freshness.

## One or two simultaneous channels

In `config.js`, change `channelCount: 1` to `channelCount: 2` BEFORE uploading for a side-by-side display. The first two entries in `channels` are used. Default sources copied from your attachment:

1. CNA-labeled stream: `https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index_5.m3u8`
2. RTHK 32: `https://rthktv32-live.akamaized.net/hls/live/2036819/RTHKTV32/master.m3u8`

During checks on 13 October 2026 the CNA-labeled playlist returned HTTP 200, a valid HLS playlist and a browser cross-origin header. RTHK returned HTTP 403 from the test connection. Therefore only the CNA-labeled stream is enabled by default. A playlist response alone does not prove full video playback, channel identity, freshness or viewing permission. Neither end-to-end live playback nor physical Skyworth playback has been verified. Addresses may expire/change; regional or publisher restrictions can apply. No restrictions are bypassed. Official CNA viewing page: https://www.channelnewsasia.com/watch . The source name is inherited from your supplied code.

For a second channel replace its `name` and `url` with a working authorized HTTPS HLS stream. HLS manifests AND their segments/keys must allow browser cross-origin access unless native playback handles them. No always-on FIFA broadcast has been verified or connected. Do not label replays as live. If you want FIFA matches as the second channel, a working authorized event source with the necessary viewing permission is still needed.

## Actual market data rather than disguised sample figures

Hang Seng (`HSI:HSI`), QQQ (`NASDAQ:QQQ`) and VOO (`AMEX:VOO`) use TradingView provider widgets. Demo prices from the pasted code are not used. Provider data can be delayed, end-of-day, unsupported or unavailable; widgets do not guarantee exchange-real-time prices. A personal paid subscription does not automatically upgrade public widget data. Confirm symbol status in the provider display. The original pasted code used hardcoded fallback stock prices and fixed FX figures without a demo label; those are deliberately excluded.

Guaranteed real-time commercial display requires a licensed feed/server integration. Do not place private API keys in GitHub. Documentation: https://www.tradingview.com/widget-docs/faq/data/ . Attribution is retained. Widget failure never substitutes fictional prices.

## Branding and content

Actual VINO artwork and concrete texture were extracted from page 1 of your PDF-compatible AI document. Approximate screen palette: #D6D6D6 grey, #202020 black, #A80030 red. Promotions rotate automatically every 18 seconds. Change their copy/images and the ticker in `config.js`; confirm offers before displaying to customers.

Coffee asset: generated with the built-in image tool using the supplied logo reference. Brief: photorealistic adult barista pouring milk into protein coffee in a white VINO-branded cup; black apron, grey concrete cafe, espresso machine, natural lighting, wide framing and dark copy space; no prices or nutrition claims. Cup branding is a generated approximation; header uses extracted artwork.

RSS: BBC World, SCMP and BBC Asia; rss2json then AllOrigins proxies, labeled cached/offline fallback, publication times shown. These are best-effort external services, not guaranteed live television. No full articles are copied. Confirm source/public-screening permissions for commercial gym display.

## Bundled player

`assets/hls.min.js` is hls.js 1.6.13, used where native HLS is unavailable. Download source: https://cdn.jsdelivr.net/npm/hls.js@1.6.13/dist/hls.min.js . Project/license: https://github.com/video-dev/hls.js/tree/v1.6.13 (Apache-2.0). Library notices are retained in the minified file. Native HLS is preferred when supported. No remote fonts or playback-library CDN call is required at runtime.

## Verification

Local Chrome: one-channel and two-channel creation, no channel selectors, no JavaScript errors, viewport containment at a non-16:9 size. Source syntax checked. Stream HTTP/manifest checks described above are separate from full video playback. End-to-end media playback, market-widget availability/latency and physical TV behavior remain unverified. Older `live.js` remains in the folder for compatibility but is not loaded by version 3.

## First deployment

Upload unzipped contents with `index.html` at repository root, then Settings → Pages → Deploy from a branch → main → /(root) → Save. GitHub provides the URL after deployment. Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
