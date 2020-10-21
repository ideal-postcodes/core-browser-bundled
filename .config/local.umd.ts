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

import { executablePath } from "puppeteer";
process.env.CHROME_BIN = executablePath();

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
    esm: {
      nodeResolve: true,
      moduleDirs: ["node_modules", "dist"],
    },
    browsers: ["ChromeHeadless"],
    files: [
      { pattern: "dist/core-browser.umd.min.js"},
      { pattern: "test/umd.integration.ts"},
    ],
  });
