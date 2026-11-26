# VINO — YouTube video update

This is the complete website package with the two supplied YouTube videos set to play in the main TV panel. It can use either the current video ID list or a YouTube playlist for simpler future updates.

## Install

1. Unzip `vino-gym-tv-youtube-playlist-v14.zip`.
2. Open https://github.com/al13ert/Vino-Gym and choose Add file → Upload files.
3. Upload ALL the unzipped contents directly to the repository root, including `assets`, `data`, `scripts` and the hidden `.github/workflows` folder. Replace matching files. The `.github` folder is hidden: on a Mac press Command+Shift+. in the file picker to show it. If uploading via GitHub’s browser page, first unzip the package, then upload the files and folders from inside it directly to the repository root. Make sure `.github/workflows/refresh-market-weather.yml` is included; without it, the automatic market and weather updates will not run. Do not upload the ZIP or the containing folder.
4. Commit changes and wait for GitHub Pages deployment.
5. Open your TV link: https://al13ert.github.io/Vino-Gym/?v=14 .

Your normal TV address remains https://al13ert.github.io/Vino-Gym/ . The v=14 address helps distinguish this update. The package is not yet on GitHub. The website URL will continue showing the currently committed version until these files are uploaded and committed.

The main player is set to the two YouTube videos currently supplied, in order, and requests muted autoplay and repeat playback. Some videos may refuse embedding or autoplay because of their YouTube settings, age or regional restrictions, or TV-browser behavior.

To change clips manually, update the `youtubeVideoIds` list in `config.js` and upload/commit the updated file. For no-code updates directly on YouTube, put your chosen videos in a YouTube playlist and send me its link; I can connect its playlist ID in `youtubePlaylistId` once. After that, manage the playlist on YouTube and refresh the TV page if it has not picked up changes. The package is not yet on GitHub; GitHub Pages only shows updates after files are uploaded and committed.

## YouTube videos

The player reads `youtubeVideoIds` from `config.js` when `youtubePlaylistId` is blank. The supplied video IDs are `OJ53aG34CTs` and `PMDQ82w1pAE`. To make future changes directly on YouTube without uploading new website files, create a public or unlisted playlist and connect its playlist ID in `youtubePlaylistId`. Its videos must allow embedding.

## Hong Kong market watch and weather

Market Watch now removes QQQ/VOO and shows a large scrolling list of the 50 HKEX ordinary shares with the highest reported trading turnover. The data refreshes through `.github/workflows/refresh-market-weather.yml` every 15 minutes on weekdays during the Hong Kong trading day and can also be started manually from the repository's Actions tab. GitHub Actions needs permission to commit workflow updates; the workflow declares `contents: write`. It commits a single compact data file only when the snapshot changes. If Actions are disabled or cannot commit, the dashboard reports pending/stale data rather than inventing quotes.

The quote source supplies reported turnover, price and daily percent change. The banner scrolls through all 50 codes, company names, HKD prices and changes. Data is provider supplied and may be delayed or unavailable. It is an informational display, not an exchange-certified real-time feed. The list reflects the provider's turnover ranking at the last successful refresh, not the day's final ranking until markets close.

The header fetches current temperature directly from the Hong Kong Observatory Open Data API in the TV browser and refreshes every five minutes. It uses the latest King's Park reading (or the Observatory station if unavailable) and displays the HKO update time. It falls back to the saved reading only if HKO cannot be reached, and labels that reading as saved. Source: https://data.weather.gov.hk/weatherAPI/opendata/weather.php ; official API guide: https://www.hko.gov.hk/en/weatherAPI/doc/files/HKO_Open_Data_API_Documentation.pdf . The live weather display does not depend on GitHub Actions; the scheduled refresh is still used for the stock data.

After upload, allow the first **Refresh Hong Kong market and weather data** workflow run to finish in GitHub → Actions. The dashboard will show its first values once `data/market-weather.json` is committed. To update manually later: Actions → Refresh Hong Kong market and weather data → Run workflow.

## Larger market display

The market panel now uses a taller area and larger type for the 50-stock scrolling banner. The YouTube video player remains above it; the VINO promotions, news and Hong Kong clock remain part of the complete site.

## VINO promotions

The carousel now rotates five messages for protein coffee, client transformation, strength training, nutrition coaching and community. “Get Better Today” appears in the client-results slide, footer strap and scrolling banner. The three locally bundled Instagram visuals retain their portrait layouts at the right of each promo panel; the coffee and community slides keep the existing treatment.

## Instagram promotion direction

The promo mix pairs the original protein-coffee visual with three VINO Instagram images, selected to cover results, training and nutrition. Each image is stored in the package so playback does not rely on Instagram embeds or temporary image links.

Profile: https://www.instagram.com/vinopt.hk/

Relevant public posts reviewed: https://www.instagram.com/vinopt.hk/p/DeBdmxBk42N/ · https://www.instagram.com/vinopt.hk/p/Dd01T4RExMD/ · https://www.instagram.com/vinopt.hk/p/DeS52QOE_Hx/

Selected visuals: Angela’s VINO 70-week client progress poster (https://www.instagram.com/vinopt.hk/p/DeBdmxBk42N/); the strength and muscle-building coaching visual (https://www.instagram.com/vinopt.hk/p/DeD66zWEwzO/); and VINO’s Hong Kong high-protein restaurant guide, using its roasted duck and chicken rice example (https://www.instagram.com/vinopt.hk/p/DeS52QOE_Hx/). These VINO images are bundled locally under assets/ for reliable TV playback. The client result remains attributed to the original public VINO post; use only with the client consent/permissions VINO already has for its Instagram marketing. The TV package adds no Instagram embed or expiring CDN dependency.
