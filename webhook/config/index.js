'use strict';

const development = require('./development');
const qa = require('./qa');
const production = require('./production');
const constant = require('./constant');
const envObj = {
  development: development,
  production: production,
  qa: qa
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(envObj, constant);
