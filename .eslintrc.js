module.exports = {
  env: {
    browser: false,
    node: true,
    mocha: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  globals: {
    __dirname: true,
  },
  extends: "eslint:recommended",
  rules: {
    quotes: ["error", "double"],
    "prefer-const": "error",
    "no-const-assign": "error",
    "no-var": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-array-constructor": "error",
    "prefer-arrow-callback": "error",
    semi: ["error", "always"],
    "semi-style": ["error", "last"],
    "comma-spacing": ["error", { before: false, after: true }],
  },
};
