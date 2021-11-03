'use strict';
const { setResponse } = require('../../helper/set-response');
const { getCtxParamValue } = require('../../helper/context');

const captureConfrim = (df) => {
  const globalParams = getCtxParamValue(df,'ALL_PARAMS');
  const Name = globalParams.Name;
  const pin = globalParams.number;

  setResponse(df, 'captureConfrimAadhar', {'Name':Name});
  // setResponse(df, 'capturePin', {'pin':pin});
  df.setOutputContext('global-parameters',99,globalParams)
};

module.exports = captureConfrim;
