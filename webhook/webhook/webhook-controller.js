'use strict';

const WebhookFullfillment = require('../dialogflow-fullfilment');
const config = require('./../config');
const intentMapper = require('./intent-mapper');
const logger = require('../logger');

module.exports = (db) => {
  return async (req, res, next) => {
    try {
      const requestIntent = req.body.queryResult.intent.displayName;
      const languageCode = req.body.queryResult.languageCode;
      const fulfillment = new WebhookFullfillment(config.fullfillmentConfig, req.body);

      if (!intentMapper(requestIntent) && !require(getIntent(requestIntent))) {
        const errorResponse = {
          queryResult: {
            webhookStatus: { code: 3, message: 'Webhook service failed.' }
          }
        };
        logger.log('error', 'Webhook service failed', null, errorResponse);
        res.status(500).json(errorResponse);
      } else {
        const intent = await intentMapper(requestIntent);
        if (intent) {
          await intent(fulfillment, db, next);
        } else {
          const requiredIntent = getIntent(requestIntent);
          await require(requiredIntent)(fulfillment, db, next);
        }
      }
      const result = fulfillment.getCompiledResponse();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
};

const getIntent = (name) => {
  let file = name.toLowerCase();
  file = file.replace(/ +/g, '-');
  return `./intents/${file}`;
};
