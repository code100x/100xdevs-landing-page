/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/config-eslint/react.js"],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-redeclare": "off",
  },
};
