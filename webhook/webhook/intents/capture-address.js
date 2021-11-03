'use strict';
const { setResponse } = require('../../helper/set-response');
const { getCtxParamValue } = require('../../helper/context');

const captureAddress = (df) => {
  const globalParams = getCtxParamValue(df,'ALL_PARAMS');
  const Address = globalParams.Address;
  const pin = globalParams.number;

  setResponse(df, 'captureAddress', {'Address':Address});
  // setResponse(df, 'capturePin', {'pin':pin});
  df.setOutputContext('global-parameters',99,globalParams)
};

module.exports = captureAddress;
