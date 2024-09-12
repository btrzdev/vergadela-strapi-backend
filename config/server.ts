export default ({ env }) => ({
  settings: {
   
    session: {
      enabled: true,
      keys: [
        'your_generated_key1',
        'your_generated_key2',
      ],
    },
  },
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // keys: ['myKeyA', 'myKeyB']
    keys: env.array('APP_KEYS'),
  },
  session: { enabled: true },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', true),
  },
});
