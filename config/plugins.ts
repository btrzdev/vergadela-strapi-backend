const crypto = require('crypto');

export default ({ env }) => ({
  // ...
  'users-permissions': {
    config: {
      jwt: {
        jwtSecret: env('JWT_SECRET') || crypto.randomBytes(16).toString('base64')
      },
      sizeLimit: 250 * 1024 * 1024, 
      defaultDepth: 5,
      providerOptions: {
        localServer: {
          maxage: 300000
        },
      },
    },
  },
});