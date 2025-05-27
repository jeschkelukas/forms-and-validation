/** @type {import('prettier').Config} */
const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  singleAttributePerLine: true,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/features/(.*)$",
    "",
    "^@/assets/(.*)$",
    "^@/lib/(.*)$",
    "^@/config/(.*)$",
    "^@/types/(.*)$",
    "^@/hooks/(.*)$",
    "^@/stores/(.*)$",
    "",
    "^@/components/(.*)$",
    "",
    "^[./]",
  ],
  jsonRecursiveSort: true,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-sort-json",
    "prettier-plugin-tailwindcss",
  ],
  tailwindFunctions: ["cva", "cn"],
  tailwindStylesheet: "./src/styles/global.css",
  overrides: [
    {
      files: "*.svg",
      options: {
        parser: "html",
      },
    },
    {
      files: "tsconfig*.json",
      options: {
        jsonRecursiveSort: false,
      },
    },
  ],
}

export default config
