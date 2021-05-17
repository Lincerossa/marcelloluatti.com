module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-props-no-spreading': 0,
    'max-len': 0,
    'object-curly-newline': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'import/no-extraneous-dependencies': 0,
    'no-case-declarations': 0,
    'no-param-reassign': 0,
    'jsx-a11y/anchor-is-valid': 0,
  },

};
