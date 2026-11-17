# Fieldcraft — Student Edition v1.0 beta (Build 3)

An independent, offline-capable educational handbook and interactive outdoor skills academy for students and families. No account, server, analytics, or external runtime libraries required. This is a public **educational beta**, not a certified emergency, medical, engineering, ropework, or food-safety reference.

## Try locally

Extract the complete ZIP. Open `index.html` in a modern browser. Most functionality is embedded in the HTML; installation and service worker caching require an HTTPS host (or a supported local development server). Keep an exported JSON backup: browser or school policies can clear storage. Opening from a different origin/device does not automatically move data.

## Publish on GitHub Pages

1. Create a public repository named `fieldcraft` (description: `An offline-capable survival, preparedness, homesteading and practical STEM learning academy.`).
2. Extract the ZIP and upload **all the files at repository root**, not the ZIP itself. Commit to `main`.
3. In Settings → Pages, choose Deploy from a branch, then `main` and `/ (root)`, and save.
4. Open the published Pages URL, wait for the offline cache status, then perform the teacher smoke test below. Use the actual published HTTPS URL when linking from your learning hub.

Do not publish student reports, backups or personal plans to the repository. When deploying a future version, update the cache name in `sw.js` to prevent stale offline content. The service worker only caches the app's own release resources, not external manuals or other apps.

## Included in this release

- 99 reference topics; 17 subject categories; searchable library, bookmarks and source directory.
- 6 core Academy lessons, 38 additional practice labs, and 12 Water & Survival decision exercises.
- 12 Student Academy learning paths, 12 decision scenarios, 96 assessment questions, 77 achievement goals, 5 ranks and 1,920 available XP. Separate legacy lab completion and drill records remain available.
- 21 practical calculators, garden planner (20 crop templates), harvest and preservation logs, pantry and emergency supply inventory, household and trip plans, field notes and checklists.
- Original Morse lab, phonetic alphabet, listening practice and message relay. No actual radio transmission; audible output requires a supported device and user gesture.
- Student report HTML/text export; print the HTML to PDF for classroom submission. No online grade authentication or account. Use assigned IDs and fictional household/trip records in class.
- New persistent emergency-reference entry, 8 quick field cards, print-ready HTML pocket cards and an offline digest of all 99 articles. They contain original summaries; external manuals are linked rather than redistributed. Source links need internet access. No regional map pack or third-party book corpus is bundled.
- New PWA manifest, app icons and scoped service worker. Browser support and managed-device policy determine installation availability. Core content works in a portable local HTML file independently of the PWA.

## Data and classroom privacy

All records remain on the device in the `fieldcraft-v01` localStorage key. JSON backups and reports may contain personal information in unencrypted form. Do not include real home addresses, medical details, or private student information in shared classroom files. Export a JSON backup before changing devices, clearing storage or changing from local-file to hosted use; import only trusted backups. CSV exports are for worksheets, not complete restoration. Students can intentionally share the reports with their teacher.

## Teacher smoke test before assigning

- Open the published site on a managed Chromebook. Navigate to Student Academy, complete a learning path, generate a report and confirm it's readable in Google Classroom.
- Check that classroom policy allows downloads, audio playback and local storage. Reload the page and confirm score persistence. Export and restore a backup.
- Wait for `Offline cache ready`, disable network, close/reopen the app, and test a reference, quiz, calculator and Morse playback. If caching or school policy prevents this, use the extracted portable HTML if permitted. Do not assume a successful cache guarantees future availability.
- Check mobile/desktop appearance, keyboard navigation, and adjust any assignment for students' needs. This release is an educational beta pending real-device, independent technical and accessibility review.

## Safety and sources

Do not rely on the app alone in emergencies. Contact 911 in the U.S. or local emergency services. Follow official alerts, emergency dispatch and qualified training. The knot illustrations are conceptual learning aids, not validated life-safety diagrams. Never use them for climbing, rescue, load-bearing or critical ropework. Electrical and construction examples are conceptual; do not perform installation work. Garden dates and calculators are estimates. Home canning requires exact tested USDA/NCHFP procedures including food, jar, equipment, elevation and method. No medical treatment certification or wild-food identification. Emergency Ready remains a separate future app.

New quick-reference sources (reviewed November 2026):
- American Red Cross: https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps
- CDC: https://www.cdc.gov/water-emergency/about/
- National Weather Service: https://www.weather.gov/safety/lightning-tips and https://www.weather.gov/safety/flood-during
- National Park Service: https://www.nps.gov/grte/planyourvisit/safety.htm
- CPSC: https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Carbon-Monoxide-Information-Center
- FEMA: https://www.ready.gov/wildfires
- ITU: https://www.itu.int/rec/R-REC-M.1677/en

The in-app library and About page contain source details for the earlier content. No external books, brand endorsements, or third-party illustrations are claimed. The repository owner should decide licensing before granting reuse rights.

## Validation

See `TEST-REPORT.md`. Browser tests exercised the archived versions and final application using Chromium with an injected storage shim. A simulated worker test separately exercised cache behavior. Normal hosted/local-file navigation was blocked in the test environment; actual deployment, offline install/reload, durable on-device storage, sound audibility and independent content review are still needed. Release as a supervised educational beta, not a safety-certified tool.
