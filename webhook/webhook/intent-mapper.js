'use strict';

const intents = (intent) => {
  const mappedIntent = mapper[intent];
  if (mappedIntent) { return mappedIntent; } else { return undefined; }
};

const mapper = {
  'Default Welcome Intent': require('./intents/welcome'),
  'Check Balance': require('./intents/checkBalance'),
  'Check Balance - AccountNo': require('./intents/checkBalanceAccountNo'),
  'Check Balance - AccountConfrim': require('./intents/checkBalanceConfrim'),

  'Send Money': require('./intents/sendMoney'),
  'Send Money - accountNo': require('./intents/sendMoneyTransfer'),
  'Send Money - amount': require('./intents/sendMoneyAmount'),
  'Send Money - AmountConfrim': require('./intents/sendMoneyAmountConfrim'),
  'Send Money - Done': require('./intents/sendMoneyDone'),

  'Change Contact Details': require('./intents/changeDetails'),
  'Change Contact Details - number': require('./intents/changeDetailsNumber'),
  'Change Contact Details - done': require('./intents/changeDetailsDone'),

  'Open New Account': require('./intents/newaccount'),
  'Account Name': require('./intents/capture-name'),
  'Account - contact number': require('./intents/capture-phone-number'),
  'New Account - Address': require('./intents/capture-address'),
  'Open New Account - Aadhar details': require('./intents/capture-aadhar'),
  'New Account - Aadhar confirmation': require('./intents/capture-confrim'),
  'Capture Pin Value': require('./intents/capture-pin'),
  
};

module.exports = intents;
