module.exports = {
  root: true,
  ignorePatterns: [".eslintrc.*"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["server/tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
};
