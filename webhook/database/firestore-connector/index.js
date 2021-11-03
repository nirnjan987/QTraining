'use strict';

const { Firestore } = require('@google-cloud/firestore');
const logger = require('../../logger');

module.exports = () => {
  try {
    const firestore = new Firestore();
    return firestore;
  } catch (err) {
    logger.log('error', 'Firestore connection failed', null, err);
  }
};
