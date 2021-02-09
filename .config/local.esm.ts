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

//import { executablePath } from "puppeteer";
//process.env.CHROME_BIN = executablePath();
import { readdirSync } from "fs";
import { resolve } from "path";

const path = "../node_modules/puppeteer/.local-chromium/";

const directories = (source:string) =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

process.env.CHROME_BIN = resolve(__dirname, path, directories(resolve(__dirname, path))[0], "chrome-linux", "chrome");

const browsers = ["ChromeHeadlessSand"];
const customLaunchers = {
  ChromeHeadlessSand: {
    base: 'ChromeHeadless',
    flags: ['--no-sandbox']
  }
};

module.exports = (config: any): void =>
  config.set({
    karmaTypescriptConfig: { compilerOptions: {} },
    preprocessors,
    reporters,
    frameworks: ["esm", ...frameworks],
    plugins: [
      require.resolve("@open-wc/karma-esm"),
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
    browsers,
    customLaunchers,
    files: [
      { pattern: "test/esm.integration.js", type: "module" },
      { pattern: "dist/core-browser.esm.min.js", type: "module" },
    ],
  });
