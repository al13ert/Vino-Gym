# VINO — continuous sports update

This is the complete website package with the continuous sports configuration included. It replaces the CNA stream with Red Bull TV's continuous broadcaster-scheduled sports channel. It does not use a YouTube replay playlist.

## Install

1. Unzip `vino-gym-tv-continuous-full.zip`.
2. Open https://github.com/al13ert/Vino-Gym and choose Add file → Upload files.
3. Upload ALL the unzipped contents directly to the repository root, including `assets`, `data`, `scripts` and the hidden `.github/workflows` folder. Replace matching files. The `.github` folder is hidden: on a Mac press Command+Shift+. in the file picker to show it. If uploading via GitHub’s browser page, first unzip the package, then upload the files and folders from inside it directly to the repository root. Make sure `.github/workflows/refresh-market-weather.yml` is included; without it, the automatic market and weather updates will not run. Do not upload the ZIP or the containing folder.
4. Commit changes and wait for GitHub Pages deployment.
5. Open your TV link: https://al13ert.github.io/Vino-Gym/?v=8 .

Your normal TV address remains https://al13ert.github.io/Vino-Gym/ . The v=8 address helps distinguish this update. The package is not yet on GitHub. The website URL will continue showing the currently committed version until these files are uploaded and committed.

No channel selection is needed. The existing automatic HLS player starts muted, follows the channel schedule and retries dropped connections. VINO branding, promotions, clock, news and market settings are preserved from the deployed configuration retrieved on 13 October 2026. The package must be committed to GitHub before its changes appear on the published site.

## Channel

Red Bull TV's official site lists a 24/7 stream: https://www.redbull.tv/en . Its schedule includes action sports and sports programming; it is not a guarantee of football, Premier League, F1 or live events at every moment. A continuous channel may broadcast recorded material.

Connected public CDN endpoint:
https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8

The master playlist returned HTTP 200 and adaptive video variants from 180p through 1080p during checks. This is a publicly listed CDN address, not a broadcaster-issued embedding licence or uptime guarantee. It can change or be region-restricted. No tokens, logins or restrictions are bypassed. Confirm the broadcaster's applicable public/commercial viewing permission for your gym. Hong Kong TV playback still needs checking locally.

Provider market widgets remain subject to their existing exchange delays and availability; this update does not change them into guaranteed real-time prices.

Browser verification: the deployed dashboard was opened with a local configuration override, without modifying GitHub. Red Bull TV video advanced beyond 3 seconds with muted playback and no JavaScript errors. This short test does not guarantee long-term availability or physical Hong Kong TV behavior.

## Hong Kong market watch and weather

Market Watch now removes QQQ/VOO and shows a large scrolling list of the 50 HKEX ordinary shares with the highest reported trading turnover. The data refreshes through `.github/workflows/refresh-market-weather.yml` every 15 minutes on weekdays during the Hong Kong trading day and can also be started manually from the repository's Actions tab. GitHub Actions needs permission to commit workflow updates; the workflow declares `contents: write`. It commits a single compact data file only when the snapshot changes. If Actions are disabled or cannot commit, the dashboard reports pending/stale data rather than inventing quotes.

The quote source supplies reported turnover, price and daily percent change. The banner scrolls through all 50 codes, company names, HKD prices and changes. Data is provider supplied and may be delayed or unavailable. It is an informational display, not an exchange-certified real-time feed. The list reflects the provider's turnover ranking at the last successful refresh, not the day's final ranking until markets close.

The header displays the Hong Kong Observatory's latest main-station temperature, local forecast and observation time. The same GitHub refresh job updates this snapshot every 15 minutes. Weather is current HKO data when shown, not a forecast of the whole day. Source: https://data.weather.gov.hk/weatherAPI/opendata/weather.php ; official API guide: https://www.hko.gov.hk/en/weatherAPI/doc/files/HKO_Open_Data_API_Documentation.pdf . If Actions have not run, the market panel shows a pending state; HKO updates are published with the same snapshot.

After upload, allow the first **Refresh Hong Kong market and weather data** workflow run to finish in GitHub → Actions. The dashboard will show its first values once `data/market-weather.json` is committed. To update manually later: Actions → Refresh Hong Kong market and weather data → Run workflow.

## Larger market display

The market panel now uses a taller area and larger type for the 50-stock scrolling banner. The sports stream remains above it; the VINO promotions, news, Hong Kong clock and continuous Red Bull TV channel remain part of the complete site.
