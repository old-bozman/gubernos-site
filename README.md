# gubernos.app

The public site of [Gubernos](https://gubernos.app): home, support, the privacy policy and `llms.txt` for agents. Plain HTML and CSS, no trackers; the only script is `copy.js`, for the Copy buttons. Cloudflare Pages serves `main` from the root, with no build step; a push publishes it.

`index.html` between the `concept:start` and `concept:end` markers and `concept.css` are generated from the app's `public/concept.js` by `scripts/build-concept.mjs` in the app's repository. Change them there, not here.
