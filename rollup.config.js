import "core-js";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import inject from "@rollup/plugin-inject";

import { version, devDependencies, license } from "./package.json";

const input = "node_modules/@ideal-postcodes/core-browser/dist/index.js";

const banner = `/**
 * @license 
 * Ideal Postcodes <https://ideal-postcodes.co.uk>
 * Copyright IDDQD Limited
 * Core-Browser-Bunded ${version}
 * Built on Core-Browser ${devDependencies["@ideal-postcodes/core-browser"]}
 * ${license} Licence
 */`;

// Configure terser to ignore build info banner
const terserConfig = {
  output: {
    comments: (_, { value, type }) => {
      if (type === "comment2") return /@license/i.test(value);
    },
  },
};

const fetchPath = require.resolve("whatwg-fetch");

/**
 * Whitelist files processed by Babel
 */
const include = [
  "node_modules/@ideal-postcodes/core-interface/dist/**",
  "node_modules/@ideal-postcodes/core-browser/dist/**",
  "node_modules/whatwg-fetch/dist/fetch.umd.js",
];

export default [
  /**
   * UMD build targeting 99.75% browser share
   */
  {
    input,
    output: {
      file: "./dist/core-browser.umd.min.js",
      banner,
      format: "umd",
      name: "IdealPostcodes",
      exports: "named", // Disable warning for default imports
    },
    // Inject fetch polyfill
    moduleContext: {
      [fetchPath]: "window",
    },
    plugins: [
      resolve(),
      commonjs(),
      inject({ fetch: ["whatwg-fetch", "fetch"] }),
      babel({
        babelrc: false,
        ignore: [/core-js/], // Prevent core-js from transforming itself https://github.com/rollup/rollup-plugin-babel/issues/254
        include,
        presets: [
          [
            "@babel/preset-env",
            {
              targets: "> 0.25%, not dead",
              modules: false,
              spec: true,
              useBuiltIns: "usage",
              corejs: 3,
            },
          ],
        ],
      }),
      terser(terserConfig),
    ],
  },

  /**
   * ESM build targeting minimum browser versions that allow [ES6 Modules](https://caniuse.com/#feat=es6-module)
   */
  {
    input,
    output: {
      file: "./dist/core-browser.esm.min.js",
      banner,
      format: "esm",
      exports: "named",
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelrc: false,

        ignore: [/core-js/],
        include,
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                edge: "16",
                firefox: "60",
                chrome: "61",
                safari: "11",
              },
              modules: false,
              spec: true,
              useBuiltIns: "usage",
              corejs: 3,
            },
          ],
        ],
      }),
      terser(terserConfig),
    ],
  },
  /**
   * UMD build that targets ie11 as base
   */
  {
    input,
    output: {
      file: "./dist/core-browser.umd.ie11.min.js",
      banner,
      format: "umd",
      name: "IdealPostcodes",
      exports: "named",
    },
    moduleContext: { [fetchPath]: "window" },
    plugins: [
      resolve(),
      commonjs(),
      inject({ fetch: ["whatwg-fetch", "fetch"] }),
      babel({
        babelrc: false,
        ignore: [/core-js/],
        include,
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                ie: "11",
              },
              modules: false,
              spec: true,
              useBuiltIns: "usage",
              corejs: 3,
            },
          ],
        ],
      }),
      terser(terserConfig),
    ],
  },
  /**
   * ESM build that targets latest browsers (no transpilation step)
   */
  {
    input,
    output: {
      file: "./dist/core-browser.esm.modern.min.js",
      banner,
      format: "esm",
      exports: "named",
    },
    plugins: [resolve(), commonjs(), terser(terserConfig)],
  },
];
