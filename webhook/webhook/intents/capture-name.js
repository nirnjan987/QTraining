'use strict';
const { setResponse } = require('../../helper/set-response');
const { getCtxParamValue } = require('../../helper/context');

const captureName = (df) => {
  const globalParams = getCtxParamValue(df,'ALL_PARAMS');
  const Name = globalParams.Name;
  const pin = globalParams.number;

  setResponse(df, 'captureNames', {'Name':Name});
  
  df.setOutputContext('global-parameters',99,globalParams)
};

module.exports = captureName;
