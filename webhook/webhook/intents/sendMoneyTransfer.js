'use strict';
const { setResponse } = require('../../helper/set-response');
const { getCtxParamValue } = require('../../helper/context');

const moneytransfer = (df) => {
  const globalParams = getCtxParamValue(df,'ALL_PARAMS');
  const Number = globalParams.Number;
  const pin = globalParams.number;

  setResponse(df, 'sendMoneyTransfer', {'Number':Number});
  // setResponse(df, 'capturePin', {'pin':pin});
  df.setOutputContext('global-parameters',99,globalParams)
};

module.exports = moneytransfer;
