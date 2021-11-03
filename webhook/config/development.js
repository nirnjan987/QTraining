'use strict';
if ((process.env.NODE_ENV && process.env.NODE_ENV === 'local') ||
  !process.env.NODE_ENV) {
    const dotenv = require('dotenv');
    const result = dotenv.config();
    if (result.error) {
        throw result.error;
    }
}
module.exports = {
  port: process.env.PORT || 8000,
  fullfillmentConfig: {
    platformsEnabled: ['ACTIONS_ON_GOOGLE']
  },
  auth: {
    enable: true,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD
  },
  logger: {
    piiFields: []
  },
  databases: [],
};
