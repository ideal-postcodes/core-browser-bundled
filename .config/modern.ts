/**
 * Test runner for fixed movin UMD build
 */
import "core-js/stable";
import "regenerator-runtime/runtime";
import {
  latestDesktop,
  latestMobile,
  config as sauceConfig,
} from "@ideal-postcodes/supported-browsers";
import * as defaults from "./config";

const customLaunchers = { ...latestDesktop, ...latestMobile };

module.exports = (config: any): void =>
  config.set({
    ...sauceConfig({ testName: "Core-Browser-Bundled", defaults }),
    browsers: Object.keys(customLaunchers),
    customLaunchers,
    plugins: [
      "karma-mocha",
      "karma-typescript",
      "karma-sauce-launcher",
    ],
    // Test imports the bundle from a fixed path
    proxies: { "/bundle.js": "/base/dist/core-browser.esm.modern.min.js" },
    files: [
      { pattern: "test/esm.integration.js", type: "module" },
      { pattern: "dist/core-browser.esm.modern.min.js", type: "module" },
    ],
  });
