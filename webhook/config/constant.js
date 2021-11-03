/* eslint-disable quote-props */
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
    databases: [{
        type: 'firestore',
        enable: true,
        connector: require('../database/firestore-connector')
    }],
};