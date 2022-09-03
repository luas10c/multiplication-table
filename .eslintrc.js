module.exports = {
  env: {
    es2017: true,
    browser: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  extends: ['prettier'],
  plugins: ['prettier', '@typescript-eslint/eslint-plugin'],
  rules: {
    'prettier/prettier': 'error'
  }
}
