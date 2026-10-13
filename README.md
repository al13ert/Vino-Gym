# VINO Gym TV — version 2: video and market widgets

## Update your existing GitHub site

1. Unzip `vino-gym-tv-live-v2.zip` on your computer.
2. Open https://github.com/al13ert/Vino-Gym and choose **Add file → Upload files**.
3. Upload ALL the unzipped contents directly to the repository root, replacing the files with matching names. Include the new `live.js` file and `assets` folder. Do not upload the ZIP itself or a containing folder.
4. Commit changes. Wait for the Pages deployment to finish.
5. Open https://al13ert.github.io/Vino-Gym/?v=2 and refresh. On a computer press Command+0 to reset browser zoom, then Command+Shift+R to force reload. The page also uses versioned CSS/JS links to reduce stale-cache problems.
6. On the TV use the same full address and the bottom-right fullscreen control. If its browser does not support fullscreen, use the browser menu. A modern HDMI browser is an alternative if the TV's browser cannot play third-party video.

The website link remains the same. This ZIP has not been uploaded to GitHub on your behalf.

## Full-page fix

The previous layout translated a fixed 1920×1080 panel by half its original size before scaling, which could move its edges outside the browser on smaller windows. Version 2 positions the scaled panel with explicit top/left coordinates and scales from its top-left corner. It fits inside the available browser area without cutting off the header or left edge. Letterboxing is intentional when the window is not 16:9. Browser fullscreen removes browser bars; it does not bypass playback restrictions.

## Live news video

Use the top buttons to choose CNA NEWS, DW NEWS, FIFA FOOTBALL or VINO PROMOS. News stays selected until you change it; promotions rotate only within their own tab. Switching tabs stops the previous player.

- CNA official live news page: https://www.channelnewsasia.com/watch
- CNA embed-view page used in the dashboard: https://www.channelnewsasia.com/watch/live-tv-1441426?view=embed
- DW official live channel: https://www.youtube.com/@dwnews/live
- DW channel-based YouTube embed: https://www.youtube.com/embed/live_stream?channel=UCknLrEdhRCp1aegoMqRaCZg&autoplay=1&mute=1

The dashboard attempts official embeds, not downloaded/rebroadcast video files. CNA may require pressing Play; DW requests muted autoplay. Unmute using the player's controls. Ads, cookie consent, player/browser restrictions, regional restrictions and changing broadcast URLs can affect playback. Channel-based YouTube embeds may be unavailable even when the channel has a livestream. The **Open official player** link is always available because cross-origin playback failures cannot reliably be detected by this page. End-to-end video playback on your TV has not been verified.

BBC/SCMP/BBC Asia headline feeds remain separate from video. They attempt rss2json first, then AllOrigins, with timeouts and labeled cached/offline fallback. Public RSS proxies have no uptime guarantee. Headlines are not television broadcasts.

## FIFA football — what is connected

The official FIFA+ service offers live football, archives and films: https://www.plus.fifa.com/

No verified always-on FIFA TV stream or embeddable live match has been connected. Selecting FIFA FOOTBALL shows an honest availability message and a button to open FIFA+ in a separate tab. A FIFA+ page may require sign-in, and live events and rights vary by territory. This does not supply live Premier League or F1 broadcasts.

If FIFA publishes an official live YouTube video which permits embedding and is available in your territory, put its 11-character video ID into `fifaYoutubeVideoId` in `config.js`. The football tab then uses the YouTube player. The setting can also play an official replay, so do not call it live unless you have checked the event's status. When an event ends or is blocked, clear the setting or replace it with another verified authorized event. Do not use copied tokenized stream URLs or attempt to bypass restrictions. For public gym viewing, confirm the broadcaster's applicable public/commercial screening permission.

## Actual market provider widgets

Demo figures have been removed from the displayed page. The official TradingView Tickers widget requests:

- `HSI:HSI` — Hang Seng Index
- `NASDAQ:QQQ` — Invesco QQQ
- `AMEX:VOO` — Vanguard S&P 500 ETF

These are provider-fed widgets, NOT a promise of exchange-real-time quotes. TradingView's available data can be real-time, delayed or end-of-day depending on symbol/exchange and display permissions. A symbol may be unavailable in widgets even if it appears on TradingView's main website. Read the provider's displayed data status. Unsupported/blocked/offline widgets do not fall back to invented prices. If the area is blank or displays an unavailable symbol, use the TradingView link to check it. Widget attribution remains visible.

Official documentation:
- https://www.tradingview.com/widget-docs/getting-started/
- https://www.tradingview.com/widget-docs/faq/data/
- https://www.tradingview.com/widget-docs/widgets/tickers/tickers/

For guaranteed real-time Hang Seng/US ETF data on a public gym display, arrange a licensed commercial display feed and a server-side integration. A personal TradingView subscription does not automatically upgrade a public widget. Do not put secret keys in GitHub files. The legacy API/demo helper functions are retained in `app.js`, but version 2's widget mode bypasses them and shows no demo sports or price numbers.

## Promotions and branding

Edit promotion copy, images, rotation speed and ticker in `config.js`. The supplied PDF-compatible AI file's first page provided the actual VINO logo artwork and concrete texture. Approximate screen colors: #D6D6D6 grey, #202020 black and #A80030 red. Frame uses extracted texture rather than a guessed flat background.

The coffee photograph was created with the built-in image-generation tool from this brief: adult professional barista pouring milk into protein coffee in a white cup with the supplied angular black/red VINO branding; concrete cafe, black apron, espresso machine, natural lighting, wide framing with dark copy space on left, no prices or nutrition claims. The cup logo is a generated approximation; the header uses the extracted artwork. Promotions are concepts; confirm offers and availability before showing customers.

## First-time deployment

Create a public GitHub repository; upload the unzipped contents with `index.html` at root; then set **Settings → Pages → Deploy from a branch → main → /(root) → Save**. The actual URL exists only after GitHub deploys it. Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Verification

JavaScript syntax checked. Local browser checks cover screen bounds at 1920×1080, 1280×720, 1530×850 and 1000×900, player selection, FIFA availability fallback and promotion switching. External video playback, widget quote latency/availability and the physical Skyworth TV require testing on the deployed site; they are not guaranteed by these checks.
