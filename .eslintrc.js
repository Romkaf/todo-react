module.exports = {
  extends: ["react-app", "prettier"],

  env: {
    es6: true,
    browser: true,
    node: true,
  },

  plugins: ["prettier"],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    jsx: true,
  },
};
