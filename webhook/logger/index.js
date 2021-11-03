'use strict';

const winston = require('winston');

const log = (level, message, label, data) => {
  const options = {
    console: {
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
      timestamp: true
    }
  };

  const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.label({ label: label || 'unlabeled' }),
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.Console(options.console)
    ],
    exitOnError: false // do not exit on handled exceptions
  });

  // create a stream object with a 'write' function that will be used by `morgan`
  logger.stream = {
    write: function (msg) {
      logger.info(msg);
    }
  };

  logger.log(level, message, { logDetails: data });
};

module.exports = {
  log
};
