import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "node_modules/@ideal-postcodes/core-browser/dist/index.js",
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
};
