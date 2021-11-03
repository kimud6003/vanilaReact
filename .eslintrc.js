module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    // Airbnb style guide 적용
    "airbnb-base",
    // TypeScript ESLint recommanded style 적용
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
  ],
};
