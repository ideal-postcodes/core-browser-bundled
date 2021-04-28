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
    browsers: ["ChromeHeadless"],
    files: [
      { pattern: "test/esm.integration.js", type: "module" },
      { pattern: "dist/core-browser.esm.min.js", type: "module" },
    ],
  });
