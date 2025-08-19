const js = require('@eslint/js');
const ts = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const importPlugin = require('eslint-plugin-import');
const sonarJsPlugin = require('eslint-plugin-sonarjs');
const tanstackQuery = require('@tanstack/eslint-plugin-query');
const reactNative = require('eslint-plugin-react-native');

module.exports = [
  {
    ignores: [
      'eslint.config.js',
      'commitlint.config.js',
      '.prettierrc.js',
      'babel.config.js',
      'metro.config.js',
      'react-native.config.js',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        setInterval: 'readonly',
        clearInterval: 'readonly',
        __DEV__: 'readonly',
        console: 'readonly',
        process: 'readonly',
        setTimeout: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      sonarjs: sonarJsPlugin,
      '@tanstack/query': tanstackQuery,
      'react-native': reactNative,
    },
    rules: {
      ...ts.configs.recommended.rules,
      ...sonarJsPlugin.configs.recommended.rules,
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-var-requires': 'off',
      'no-nested-ternary': 'off',
      'no-duplicate-string': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'react/prop-types': 'off',
      'react/no-unstable-nested-components': 'off',
      'no-underscore-dangle': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-param-reassign': ['error', { props: false }],
      'sonarjs/no-invalid-await': 'off',
      // This would ignore property reassign for the redux slice
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['state'],
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      // rect Query
      // '@tanstack/query/exhaustive-deps': 'error',
      // '@tanstack/query/no-rest-destructuring': 'warn',
      // '@tanstack/query/stable-query-client': 'error',
      // ---     ends here ---
      // ---     ends here ---
      // This allows the strict use of arrow functions
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.ts', '.tsx'],
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          'react/display-name': 'off',
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
          '': 'never',
        },
      ],
    },
  },
];
