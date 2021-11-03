'use strict';
const { setResponse } = require('../../helper/set-response');
const { getCtxParamValue } = require('../../helper/context');

const moneydone = (df) => {
  const globalParams = getCtxParamValue(df,'ALL_PARAMS');
  const Number = globalParams.Number;
  const pin = globalParams.number;

  setResponse(df, 'sendMoneyDone', {'Number':Number});
  // setResponse(df, 'capturePin', {'pin':pin});
  df.setOutputContext('global-parameters',99,globalParams)
};

module.exports = moneydone;
