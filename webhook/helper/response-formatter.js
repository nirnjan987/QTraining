'use strict';

const template = require('lodash.template');
const responsePath = '../data/responses';
const logger = require('../logger');

module.exports.processResponse = (data) => {
  let responseMessage;
  const messageSkeleton = require(`${responsePath}/${data.language}/chat`);

  if (data.key) {
    let compiled;
    try {
      compiled = template(messageSkeleton[data.key]);
    } catch (error) {
      logger.log('error', 'Lodash Template Error', 'Lodash', error);
    }
    responseMessage = compiled(data.values);
  }
  if (!responseMessage) {
    responseMessage = 'Error while compiling response';
    logger.log('error', `Error to compile response for key: ${data.key}`);
  }
  return responseMessage;
};


