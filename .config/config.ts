import { config } from "dotenv";
config();

export const frameworks = ["mocha", "karma-typescript"];

export const preprocessors = {
  "**/*.ts": ["karma-typescript"],
};

export const karmaTypescriptConfig = {
  compilerOptions: {
    target: "ES3",
    lib: [
      "dom",
      "dom.iterable",
      "es2015",
      "es2016.array.include",
      "es2017.object",
      "es2017.string",
      "es2018.asynciterable",
      "es2018.promise",
      "es2019.array",
      "es2019.object",
      "es2019.string",
      "es2020.string",
    ],
  },
};

export const files = [
  "node_modules/whatwg-fetch/dist/fetch.umd.js",
  { pattern: "test/**/*.ts" },
];

export const reporters = ["dots", "karma-typescript"];

export const singleRun = true;

export const basePath = "../";

export const concurrency = 1;
