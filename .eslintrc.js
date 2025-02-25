// module.exports = {
//   root: true,
//   extends: ['universe/native'],
// };
// module.exports = {
//   root: true,
//   extends: ["expo", "eslint:recommended"],
// };
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: [
          'builtin', // Node "builtin" modules (fs, path, etc.)
          'external', // NPM packages (react, lodash, etc.)
          'internal', // Our internal modules (using our alias like @/...)
          'parent', // Parent directories (../)
          'sibling', // Sibling files in the same folder (./)
          'index', // index file imports
        ],
      
        // Do not apply our pathGroups to react since we already handle it.
        pathGroupsExcludedImportTypes: ['react'],

        'newlines-between': 'always', // add a blank line between groups
        alphabetize: {
          order: 'asc', // sort alphabetically within groups
          caseInsensitive: true,
        },
      },
    ],
  },
};
