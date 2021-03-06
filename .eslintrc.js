module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    semi: 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-return-assign': 'off',
    'import/no-unresolved': 'off',
    'prettier/prettier': 'error',
    'prefer-spread': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 0,
    'no-useless-constructor': 'off',
  },
  ignorePatterns: ['node_modules/', 'dist/', 'build/_db/migrations/'],
}
