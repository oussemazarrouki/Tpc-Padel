module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['2cacca274eea19b6c172dfca1b3a2e86b194e064c2a1c708d86293d14b0f6b39', '0100b0f87663f570fdf08dba5e115f3a1fb20f8c6e1069fd93eec0bcb7a1ea42'],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
