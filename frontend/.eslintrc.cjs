module.exports = {
  root: true,
  env: { browser: true, es2024: true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'plugin:storybook/recommended', "plugin:@tanstack/eslint-plugin-query/recommended"],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh','react', 'react-hooks', "@tanstack/query"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'arrow-body-style': ['error', 'always'],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-param-reassign': 'off',
  },
  overrides: [{
    files: ['*.stories.*'],
    rules: {
      'react/prop-types': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'import/no-extraneous-dependencies': [0, {'devDependencies': true}]
    },
  }],
}
