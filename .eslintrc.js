module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'react-app',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "prettier/prettier": [
      "error", {
        "printWidth": 80,
        "trailingComma": "es5",
        "semi": true,
        "jsxSingleQuote": true,
        "singleQuote": true,
        "useTabs": true,
        "endOfLine": "auto",
        "max-len": ["error", { "code": 80 }]
      } ]
  }
}
