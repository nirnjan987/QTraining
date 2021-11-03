'use strict';
const { setResponse } = require('../../helper/set-response');
const { getCtxParamValue } = require('../../helper/context');

const balanceCheckConfrim = (df) => {
  const globalParams = getCtxParamValue(df,'ALL_PARAMS');
  const Number = globalParams.Number;
  const pin = globalParams.number;

  setResponse(df, 'checkBalanceConfrim', {'Number':Number});
  // setResponse(df, 'capturePin', {'pin':pin});
  df.setOutputContext('global-parameters',99,globalParams)
};

module.exports = balanceCheckConfrim;
