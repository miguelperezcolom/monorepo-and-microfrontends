module.exports = {
  name: 'modulefederation-dashboard',
  exposes: {
    './Module':
      'apps/modulefederation/dashboard/src/app/remote-entry/entry.module.ts',
  },
};
