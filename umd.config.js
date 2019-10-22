import "core-js";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "node_modules/@ideal-postcodes/core-browser/dist/index.js",
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
    uglify(),
  ],
};
