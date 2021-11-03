'use strict';
const { setResponse } = require('../../helper/set-response');
const { getCtxParamValue } = require('../../helper/context');

const capturePhone = (df) => {
  const globalParams = getCtxParamValue(df,'ALL_PARAMS');
  const phoneNumber = globalParams.phoneNumber;
  const pin = globalParams.number;

  setResponse(df, 'capturePhoneNumber', {'phoneNumber':phoneNumber});
  // setResponse(df, 'capturePin', {'pin':pin});
  df.setOutputContext('global-parameters',99,globalParams)
};

module.exports = capturePhone;
