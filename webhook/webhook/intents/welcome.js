'use strict';
const { getCtxParamValue } = require('../../helper/context');
const { setResponse } = require('../../helper/set-response');

const welcome = (df) => {
  const globalParams = getCtxParamValue(df,'ALL_PARAMS');
  setResponse(df, 'greetings');
  df.setOutputContext('global-parameters',99,globalParams)
};

module.exports = welcome;
