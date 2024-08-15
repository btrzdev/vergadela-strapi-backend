const crypto = require('crypto');

export default ({ env }) => ({
  // ...
  'users-permissions': {
    config: {
      jwt: {
        jwtSecret: env('STRAPI_JWT_SECRET') || crypto.randomBytes(16).toString('base64')
      },
    },
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 3,
    }
  }
});