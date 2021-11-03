'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');
const expressWinston = require('express-winston');
const webhookController = require('./webhook/webhook-controller');
const databaseConnections = require('./database');
const errorHandler = require('./helper/error-handler');
const config = require('./config');
const authMiddleware = require('./helper/basic-auth');
const helmet = require('helmet');
const logger = require('./logger');


module.exports = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(helmet());
  const router = express.Router();

  router.get('/healthcheck', (req, res) => {
    res.status(200).json({ message: 'ok' });
  });


  const connections = await databaseConnections();
  let db;
  if (connections.types.length) {
    db = connections.connection;
    logger.log('info', `databaseType(s) : ${connections.types}`, null);
  }

  router.post('/v2beta1/webhook', webhookController(db));


  expressWinston.requestWhitelist.push('body');
  expressWinston.responseWhitelist.push('body');

  expressWinston.bodyBlacklist = config.logger.piiFields;

  app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    metaField: 'apiDetails',
    format: winston.format.combine(
      winston.format.json()
    )
  }));

  if (config.auth.enable) {
    app.use(authMiddleware);
  }

  app.use('/', router);

  app.use(errorHandler);

  return app;
};
