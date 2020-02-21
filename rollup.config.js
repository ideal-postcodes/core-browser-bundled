import "core-js";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

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

const terserConfig = {
  output: {
    comments: (_, { value, type }) => {
      if (type === "comment2") return /@license/i.test(value);
    },
  },
};

/**
 * Whitelist files processed by Babel
 */
const include = [
  "node_modules/@ideal-postcodes/core-interface/dist/**",
  "node_modules/@ideal-postcodes/core-browser/dist/**",
];

export default [
  {
    input,
    output: {
      file: "./dist/core-browser.umd.min.js",
      banner,
      format: "umd",
      name: "IdealPostcodes",
      exports: "named" /** Disable warning for default imports */,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelrc: false,
        // Prevent core-js from transforming itself
        // https://github.com/rollup/rollup-plugin-babel/issues/254
        ignore: [/core-js/],
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
  {
    input,
    output: {
      file: "./dist/core-browser.esm.min.js",
      banner,
      format: "esm",
      exports: "named" /** Disable warning for default imports */,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelrc: false,
        // Prevent core-js from transforming itself
        // https://github.com/rollup/rollup-plugin-babel/issues/254
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
  {
    input,
    output: {
      file: "./dist/core-browser.umd.ie11.min.js",
      banner,
      format: "umd",
      name: "IdealPostcodes",
      exports: "named" /** Disable warning for default imports */,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelrc: false,
        // Prevent core-js from transforming itself
        // https://github.com/rollup/rollup-plugin-babel/issues/254
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
  {
    input,
    output: {
      file: "./dist/core-browser.esm.modern.min.js",
      banner,
      format: "esm",
      exports: "named" /** Disable warning for default imports */,
    },
    plugins: [resolve(), commonjs(), terser(terserConfig)],
  },
];
