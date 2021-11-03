'use strict';
const { npm } = require('winston/lib/winston/config');
const { openaccount } = require('../../data/responses/en/chat');
const { setResponse } = require('../../helper/set-response');

const newaccount = (df) => {
  setResponse(df,'newaccounts');
};


module.exports = newaccount;

