'use strict';
const { setResponse } = require('../../helper/set-response');
const { getCtxParamValue } = require('../../helper/context');

const detailschange = (df) => {
  const globalParams = getCtxParamValue(df,'ALL_PARAMS');
  const String = globalParams.String;
  const pin = globalParams.number;

  setResponse(df, 'changeDetails', {'String':String});
  // setResponse(df, 'capturePin', {'pin':pin});
  df.setOutputContext('global-parameters',99,globalParams)
};

module.exports = detailschange;
