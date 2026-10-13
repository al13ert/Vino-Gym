# VINO Gym TV — GitHub Pages edition

A build-free, 16:9 signage dashboard for your Skyworth 55-inch 8900. Includes your extracted VINO artwork and grey concrete texture, rotating promotions, generated protein-coffee photograph with a VINO-branded cup, Hong Kong clock, RSS headlines, and explicitly labeled demonstration market and sports panels.

## Get your TV link — no coding required

1. Download and unzip `vino-gym-tv.zip` on your computer.
2. Sign in at https://github.com and choose **New repository**. Name it `vino-tv`, select **Public**, and create it. A public repository is suitable for GitHub's free Pages hosting; anyone can view these files, so do not upload private information.
3. In that repository choose **Add file → Upload files**. Upload the CONTENTS of the unzipped folder: `index.html`, `style.css`, `config.js`, `app.js`, `README.md`, and the whole `assets` folder. Include `.nojekyll` if your computer shows hidden files. Do not upload the ZIP itself. `index.html` must be at the repository's top level, not inside another `vino-tv` folder.
4. Choose **Commit changes**.
5. Open **Settings → Pages**. Under Build and deployment choose **Deploy from a branch**, then **main**, **/(root)**, and **Save**.
6. Wait for GitHub's deployment to finish. Return to Settings → Pages and use **Visit site**. The address will normally look like `https://YOUR-USERNAME.github.io/vino-tv/` (example format only).
7. On the TV, open its web browser and enter the actual address shown by GitHub. Bookmark it. Set the TV to landscape and fit-to-screen / original aspect ratio; turn off overscan if the edges are cut off. Press the dashboard's bottom-right fullscreen button if supported.

**No GitHub Pages URL has been created yet. It only exists after you upload these files and enable Pages.** A ZIP or local HTML file does not create a public website by itself.

Official deployment instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## On the TV

The design is composed at 1920 × 1080 and scales to 16:9 screens, including 4K. Other shapes show letterboxing. There is no sound, login or build step. Promotions rotate every 18 seconds; left/right arrows select a promotion and Enter or F requests fullscreen. Fullscreen requires browser support and may need a click. Keep the TV online for feeds. If its built-in browser cannot run the page, use a modern browser on an HDMI-connected computer or streaming device. This exact TV has not been tested.

## Branding and promotions

The supplied AI document is PDF-compatible. Page 1 was rendered and its actual logo and concrete texture extracted. Frame base grey is approximately **#D6D6D6**, with **#202020** ink and an approximately matched **#A80030** red accent. The concrete background is textured, not a single flat color. These are rendered-screen colors rather than print color specifications.

Edit `config.js` through GitHub's pencil button to change the promotion text, ticker, rotation speed, and feed URLs. Commit changes and wait for Pages to update. Promotions are concepts, not confirmed offers: check availability and wording before showing customers. No prices or protein quantities are claimed. Add your own JPG/PNG to `assets` and point a promotion's `image` to that relative path. Keep filenames case-sensitive and avoid leading `/` paths.

The coffee photo was made with the built-in image-generation tool, using the supplied logo mockup as a branding reference. Generated cup lettering is a visual approximation. The actual extracted artwork appears in the header.

Image brief: photorealistic wide gym-cafe scene of an adult professional barista pouring milk into protein coffee in a white VINO-branded cup; black apron, grey concrete cafe, espresso machine, natural light, scene on right and dark space for copy on left; no prices, slogans, or nutrition claims.

## News: best-effort RSS, with honest failure handling

Sources: BBC World, SCMP Hong Kong and BBC Asia. SCMP's feed directory: https://www.scmp.com/rss ; BBC feed information: https://support.bbc.co.uk/platform/feeds/NewsFeeds.htm

The browser first tries the public rss2json service, then AllOrigins as an independent XML proxy. Each request times out after 10 seconds. Public proxies have no uptime guarantee and may rate-limit or block requests. GitHub Pages cannot run a private server or guarantee RSS access. Successful responses are cached locally for up to 24 hours across restarts; failures retain session data marked CACHED. Headline publication time is shown in Hong Kong time. A retrieved headline is not labeled live. On startup without a usable feed or cache, the panel says OFFLINE / NO FEED and links to the publication instead of inventing news. Feeds refresh every 10 minutes and headlines rotate every 18 seconds. No full article text is republished. Confirm publishers' current permission for public/commercial signage use before operation.

For dependable production operation, replace the public proxy logic in `app.js` with your own monitored CORS-enabled RSS service. Do not put private credentials into website files.

## Sports and markets

**F1 / Premier League scores and Hang Seng / QQQ / VOO quotes are DEMONSTRATION DATA by default.** Fictional sports participants prevent confusing them with real matches; market numbers are illustrative. They do not refresh into real figures automatically. No API subscriptions or secret credentials are included.

To connect actual data, set `marketsEndpoint` and/or `sportsEndpoint` in `config.js` to your own public read-only HTTPS JSON endpoint with CORS enabled. Use a server-side service to translate your licensed provider response into the formats below; API-provider responses generally cannot be used directly. GitHub Pages has no backend and all its files are public. Keep provider keys on your server. Review provider permissions, commercial display rights, data latency and exchange licensing.

Market response:
```json
{"source":"Your provider (delayed 15 min)","asOf":"2026-10-13T03:00:00Z","markets":[{"symbol":"HANG SENG · HKD","price":"20,000.00","change":"+0.50%"},{"symbol":"QQQ · USD","price":"500.00","change":"+0.25%"},{"symbol":"VOO · USD","price":"550.00","change":"−0.10%"}]}
```
Sports response:
```json
{"source":"Your licensed sports provider","asOf":"2026-10-13T03:00:00Z","sports":[{"league":"FORMULA 1","result":"Your verified result","detail":"Event, session and result status"},{"league":"PREMIER LEAGUE","result":"Your verified score","detail":"Fixture date, minute or full-time status"}]}
```
These JSON examples are schema examples, not real data. Use ISO timestamps with timezone. The UI labels accepted data API DATA with its timestamp; more than 15 minutes old is STALE. Invalid, failed, future-dated beyond a one-minute tolerance or over-24-hour-old responses revert to labeled demos. Provider quotes may be delayed even when recently fetched. No claim of real-time accuracy is made.

## Files and troubleshooting

Keep all files together. `index.html` alone requires the neighboring CSS, JavaScript and assets. Opening it locally previews branding and promotions; proxy feeds may be restricted for local-file origins. Use the deployed HTTPS page for operation.

- **404:** confirm `index.html` is in repository root and Pages uses main / root; check deployment status.
- **Blank image:** confirm `assets` was uploaded and filenames match exactly.
- **No news:** test internet access; proxies/publishers may be down. The offline message is expected when feeds fail.
- **Old content:** reload the TV browser, or clear its cache after an update.
- **Fullscreen unavailable:** use the TV/browser fullscreen menu or an HDMI browser.

Verified in local Chrome: no JavaScript errors, three offline news fallbacks, three demo market panels, manual promotion rotation, and 1920×1080 / 1280×720 scaling. The visual preview was inspected. No test on the physical Skyworth TV or end-to-end live publisher/proxy availability is implied.
