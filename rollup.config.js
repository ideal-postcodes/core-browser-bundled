import "core-js";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";

const input = "node_modules/@ideal-postcodes/core-browser/dist/index.js";

export default [
  {
    input,
    output: {
      file: "./dist/core-browser.umd.min.js",
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
      terser(),
    ],
  },
  {
    input,
    output: {
      file: "./dist/core-browser.esm.min.js",
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
      terser(),
    ],
  },
  {
    input,
    output: {
      file: "./dist/core-browser.umd.ie11.min.js",
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
      terser(),
    ],
  },
  {
    input,
    output: {
      file: "./dist/core-browser.esm.modern.min.js",
      format: "esm",
      exports: "named" /** Disable warning for default imports */,
    },
    plugins: [resolve(), commonjs(), terser()],
  },
];
