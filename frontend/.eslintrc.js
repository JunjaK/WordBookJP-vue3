module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:vue/vue3-strongly-recommended',
  ],
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'import/prefer-default-export': 0,
    'max-len': ['warn', { code: 200 }],
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    indent: [2, 2],
  },
  settings: {
    'import/extensions': [
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
    ],
    'import/resolver': {
      alias: {
        map: [
          [
            '@', './src',
          ],
        ],
        extensions: [
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
        ],
      },
      node: {
        extensions: [
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
        ],
      },
    },
  },
};
