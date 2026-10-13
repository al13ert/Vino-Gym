# VINO — continuous sports update

This is the COMPLETE website, packaged from your existing public repository with the continuous sports configuration included. It replaces the CNA stream with Red Bull TV's continuous broadcaster-scheduled sports channel. It does not use a YouTube replay playlist.

## Install

1. Unzip `vino-gym-tv-continuous-full.zip`.
2. Open https://github.com/al13ert/Vino-Gym and choose Add file → Upload files.
3. Upload ALL the unzipped contents directly to the repository root, including the assets folder. Replace matching files. Do not upload the ZIP or a containing folder.
4. Commit changes and wait for GitHub Pages deployment.
5. Open your TV link: https://al13ert.github.io/Vino-Gym/?v=6 .

Your normal TV address remains https://al13ert.github.io/Vino-Gym/ . The v=6 address helps distinguish this update. This package has not been uploaded on your behalf.

No channel selection is needed. The existing automatic HLS player starts muted, follows the channel schedule and retries dropped connections. VINO branding, promotions, clock, news and market settings are preserved from the deployed configuration retrieved on 13 October 2026. This file has not been uploaded to GitHub on your behalf.

## Channel

Red Bull TV's official site lists a 24/7 stream: https://www.redbull.tv/en . Its schedule includes action sports and sports programming; it is not a guarantee of football, Premier League, F1 or live events at every moment. A continuous channel may broadcast recorded material.

Connected public CDN endpoint:
https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8

The master playlist returned HTTP 200 and adaptive video variants from 180p through 1080p during checks. This is a publicly listed CDN address, not a broadcaster-issued embedding licence or uptime guarantee. It can change or be region-restricted. No tokens, logins or restrictions are bypassed. Confirm the broadcaster's applicable public/commercial viewing permission for your gym. Hong Kong TV playback still needs checking locally.

Provider market widgets remain subject to their existing exchange delays and availability; this update does not change them into guaranteed real-time prices.

Browser verification: the deployed dashboard was opened with a local configuration override, without modifying GitHub. Red Bull TV video advanced beyond 3 seconds with muted playback and no JavaScript errors. This short test does not guarantee long-term availability or physical Hong Kong TV behavior.
