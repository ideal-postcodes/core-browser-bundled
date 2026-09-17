/**
 * Local test runner
 */
import {
  frameworks,
  reporters,
  basePath,
  singleRun,
  preprocessors,
} from "./config";

module.exports = (config: any): void =>
  config.set({
    karmaTypescriptConfig: { compilerOptions: {} },
    preprocessors,
    reporters,
    frameworks,
    plugins: [
      "karma-mocha",
      "karma-typescript",
      "karma-chrome-launcher",
    ],
    singleRun,
    basePath,
    // Test imports the bundle from a fixed path
    proxies: { "/bundle.js": "/base/dist/core-browser.esm.min.js" },
    browsers: ["ChromeHeadless"],
    files: [
      { pattern: "test/esm.integration.js", type: "module" },
      { pattern: "dist/core-browser.esm.min.js", type: "module" },
    ],
  });
