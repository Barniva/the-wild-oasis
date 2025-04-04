module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "react-app", // Ensures compatibility with create-react-app linting
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: [],
  rules: {
    "no-unused-vars": "warn", // Change error to a warning
  },
};
