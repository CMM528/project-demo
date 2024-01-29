export default {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "vue/setup-compiler-macros": true
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "parser": "@typescript-eslint/parser",
    "project": "./tsconfig.json",
    "extraFileExtensions": [".vue"]
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  "ignorePatterns": ["dist", ".eslintrc.cjs", "vite.config.js"],
  "rules": {
    // "vue/mu"
    "vue/multi-word-component-names": "off",
  }
}
