'use strict';

const { processResponse } = require('./response-formatter');

const setResponse = (df, key, values) => {
  const languageCode = df._request.queryResult.languageCode;
  const response = processResponse({
    language: languageCode,
    key: key,
    values: values
  });
  df.setSynthesizeSpeech(response);
  df.setResponseText(response);
};

module.exports = { setResponse };
