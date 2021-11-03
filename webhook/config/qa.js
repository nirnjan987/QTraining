'use strict';

module.exports = {
  port: process.env.PORT || 443,
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
  databases: []
};
