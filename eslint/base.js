/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    'turbo',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'prettier'
  ],
  env: {
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'turbo/no-undeclared-env-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-floating-promises': 'off'
  },
  ignorePatterns: [
    '**/.eslintrc.cjs',
    '**/*.js',
    '**/*.config.cjs',
    '.next',
    'dist',
    'pnpm-lock.yaml'
  ],
  reportUnusedDisableDirectives: true
}

module.exports = config
