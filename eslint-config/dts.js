/**
 * A special configuration for the TypeScript ambient context files.
 */
module.exports = {
  rules: {
    /**
     * https://eslint.org/docs/rules/spaced-comment
     *
     * Allow triple slash directives for types references.
     */
    'spaced-comment': ['error', 'always', { line: { markers: ['/'] } }],

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
     */
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { lib: 'never', path: 'never', types: 'prefer-import' },
    ],

    /**
     * https://eslint.org/docs/rules/max-classes-per-file
     */
    'max-classes-per-file': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
     */
    'import/no-default-export': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class
     */
    '@typescript-eslint/no-extraneous-class': 'off',
  },
};
