/**
 * Test runner for fixed movin UMD build
 */
import "core-js/stable";
import "regenerator-runtime/runtime";
import {
  legacyDesktop,
  legacyMobile,
  config as sauceConfig,
} from "@ideal-postcodes/supported-browsers";
import * as defaults from "./config";

const customLaunchers = { ...legacyDesktop, ...legacyMobile };

module.exports = (config: any): void =>
  config.set({
    ...sauceConfig({ testName: "Core-Browser-Bundled", defaults }),
    browsers: Object.keys(customLaunchers),
    customLaunchers,
    files: [
      { pattern: "test/umd.integration.ts" },
      "dist/core-browser.umd.min.js",
    ],
  });
