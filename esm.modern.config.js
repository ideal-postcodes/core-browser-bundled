import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "node_modules/@ideal-postcodes/core-browser/dist/index.js",
  output: {
    file: "./dist/core-browser.esm.modern.min.js",
    format: "esm",
    exports: "named" /** Disable warning for default imports */,
  },
  plugins: [resolve(), commonjs(), terser()],
};
