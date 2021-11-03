'use strict';
const { setResponse } = require('../../helper/set-response');
const { getCtxParamValue } = require('../../helper/context');

const capturePin = (df) => {
  const globalParams = getCtxParamValue(df,'ALL_PARAMS');
  const pin = globalParams.number;
  const phoneNumber = globalParams.phoneNumber;
  //setResponse(df, 'capturePhoneNumber', {'phoneNumber':phoneNumber});
  setResponse(df, 'capturePin', {'pin':pin});
  df.setOutputContext('global-parameters',99,globalParams)
};

module.exports = capturePin;
