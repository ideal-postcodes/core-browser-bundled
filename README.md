<h1 align="center">
  <img src="https://img.ideal-postcodes.co.uk/Ideal%20Postcodes%20Browser%20Logo@3x.png" alt="Ideal Postcodes Javascript Client">
</h1>

> JavaScript browser bundles for api.ideal-postcodes.co.uk client

![CI](https://github.com/ideal-postcodes/core-browser-bundled/workflows/CI/badge.svg)
![Cross Browser Testing](https://github.com/ideal-postcodes/core-browser-bundled/workflows/Cross%20Browser%20Testing/badge.svg?branch=saucelabs)

[![npm version](https://badge.fury.io/js/%40ideal-postcodes%2Fcore-browser-bundled.svg)](https://badge.fury.io/js/%40ideal-postcodes%2Fcore-browser-bundled)
[![jscdn](https://badgen.net/jsdelivr/v/npm/@ideal-postcodes/core-browser-bundled)](https://cdn.jsdelivr.net/npm/@ideal-postcodes/core-browser-bundled/dist/)
[![Release](https://github.com/ideal-postcodes/core-browser-bundled/workflows/Release/badge.svg)](https://github.com/ideal-postcodes/core-browser-bundled/actions)

This package exports polyfilled, minified copies of `core-browser` in various formats available on npm and various JavaScript cdns. It can be readily [dropped in](#usage) on a page without transpilation of `core-browser`.

If you intend to incorporate the browser client in your own bundle, please use [`core-browser`](https://github.com/ideal-postcodes/core-browser) as your `package.json` dependency.

Builds tested against [a suite of modern and legacy, mobile and desktop browsers](https://github.com/ideal-postcodes/supported-browsers).

## Download

Latest and pinned versions of each bundle can be downloaded from [jsdelivr.com](https://www.jsdelivr.com).

We strongly recommend serving your own versioned copy. If served from jsdelivr.com please attach a version number.

### Latest Versions

- [core-browser.umd.min.js@latest](https://cdn.jsdelivr.net/npm/@ideal-postcodes/core-browser-bundled/dist/core-browser.umd.min.js)
- [core-browser.umd.ie11.min.js@latest](https://cdn.jsdelivr.net/npm/@ideal-postcodes/core-browser-bundled/dist/core-browser.umd.ie11.min.js)
- [core-browser.esm.min.js@latest](https://cdn.jsdelivr.net/npm/@ideal-postcodes/core-browser-bundled/dist/core-browser.esm.min.js)
- [core-browser.esm.modern.min.js@latest](https://cdn.jsdelivr.net/npm/@ideal-postcodes/core-browser-bundled/dist/core-browser.esm.modern.min.js)

### Pinned Versions

⚠️ It is important you pin your bundle version in production. Pulling directly from latest may introduce backwards breaking changes.

Please follow the instructions on [jsdelivr.com/core-browser-bundled](https://www.jsdelivr.com/package/npm/@ideal-postcodes/core-browser-bundled) to pin a specific version in production.

Example `<script>` pinned to version `1.4.0`

```
<script src="https://cdn.jsdelivr.net/npm/@ideal-postcodes/core-browser-bundled@1.4.0/dist/core-browser.umd.min.js"></script>
```

## Links

- [Bundles Overview](#bundles-overview)
- [Usage](#usage)
- [Client Documentation](https://core-interface.ideal-postcodes.dev/#documentation)
- [Core JS API Client Documentation](https://core-interface.ideal-postcodes.dev/)
- [npm Module](https://www.npmjs.com/package/@ideal-postcodes/core-browser-bundled)
- [GitHub Repository](https://github.com/ideal-postcodes/core-browser-bundled)

## Other JavaScript Clients

- [Browser Client Repository](https://github.com/ideal-postcodes/core-browser)
- [Node.js Client Repository](https://github.com/ideal-postcodes/core-node)

## Documentation

### Bundles Overview

`core-browser-bundled` ships 4 javascript bundles.

#### core-browser.umd.min.js

- **UMD compatible**
- Transpiles core-browser to target browsers with more than 0.25% marketshare according to [caniuse.com](https://caniuse.com/usage-table). This is a moving target and obselete browsers will lose support over time as new builds are created.
- Bundled with `fetch` polyfill
- Default export of the npm module

#### core-browser.umd.ie11.min.js

- **UMD compatible**
- Transpiles core-browser to target IE11 as minimum browser version. This will create a fixed target bundle over time. The tradeoff to this is larger script payload.
- Bundled with `fetch` polyfill

#### core-browser.esm.min.js

- **ES Module compatible**
- Targets browsers with [ES Module support](https://caniuse.com/#search=module)
- Default ES Module export

#### core-browser.esm.latest.min.js

- **ES Module compatible**
- No legacy browser transpilation or polyfills
- Smallest package size (v1.1.0: 3.5kb gzipped)

### Usage

#### UMD

```html
<script src="https://cdn.jsdelivr.net/npm/@ideal-postcodes/core-browser-bundled/dist/core-browser.umd.min.js"></script>

<script>
  var Client = IdealPostcodes.Client;
  var client = new Client({ api_key: "iddqd" });
  var postcode = "ID1 1QD";
  client.lookupPostcode({ postcode })
    .then(function(result) {
      console.log(result);
    });
</script>
```

#### ES Module

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@ideal-postcodes/core-browser-bundled/dist/core-browser.esm.min.js"></script>

<script type="module">
import { Client } from "https://cdn.jsdelivr.net/npm/@ideal-postcodes/core-browser-bundled/dist/core-browser.esm.min.js";
const client = new Client({ api_key: "iddqd" });
const postcode = "ID1 1QD";
const result = await client.lookupPostcode({ postcode });
</script>
```

### Client Documentation

This package is a transpiled copy of [`ideal-postcodes/core-browser`](https://github.com/ideal-postcodes/core-browser). You can find the quickstart [here](https://github.com/ideal-postcodes/core-browser#quickstart).

For a complete list of client methods, including low level resource methods, please see the [core-interface documentation](https://core-interface.ideal-postcodes.dev/#documentation)

## Build

```bash
npm run build
```

## Run Examples

Build, and serve example pages locally:

```bash
npm run build && \ # Build JS bundles
npm start          # Start http server
```

For UMD demo visit [http://localhost:8081/example/umd.html](http://localhost:8081/example/umd.html)

For ES module demo visit [http://localhost:8081/example/esm.html](http://localhost:8081/example/esm.html)

## Licence

MIT
