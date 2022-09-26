module.exports = {
  name: 'modulefederation-book',
  exposes: {
    './Module':
      'apps/modulefederation/book/src/app/remote-entry/entry.module.ts',
  },
};
