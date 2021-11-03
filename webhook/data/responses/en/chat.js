'use strict';

module.exports = {
  greetings: [`Hi, Welcome to ICICI Bank. I am a chat bot! How may I assist you today? `],

  checkBalance:[`I would require some information in order to help you. Could you please tell me your account number? `],
  checkBalanceAccountNo:[`Is <%= Number%> your account number, please confirm it.`],
  checkBalanceConfrim:[`Thanks, 20,000/- This is your current available balance. `],

  sendMoney:[`I would require some information in order to help you. Could you please tell me your account number? `],
  sendMoneyTransfer:[`Could you please tell me the account number of whom you want to transfer `],
  sendMoneyAmount:[`Could you please tell the amount you want to transfer?`],
  sendMoneyAmountConfrim:[`Is <%= Number%> the amount you want to transfer, please confirm it.`],
  sendMoneyDone:[`Done, your money is transferred.`],

  changeDetails:[`I would require some information in order to help you. Could you please tell me your account number? `],
  changeDetailsNumber:[`Could you please tell me the new mobile number you want to update? `],
  changeDetailsDone:[`Done, your contact details are updated.`],

  newaccounts: [`I would require some information in order to help you. Could you please tell me your full name? `],
  captureNames: ['Thanks <%= Name%> , Could you please tell me your contact details? '],
  capturePhoneNumber: ['Thanks, Could you please tell me your address details?'],
  captureAddress: [` <%= Address%> Thanks, Could you please tell me your aadhar details?  `],
  captureAadhar:[`please confrim your details <%= Number%> `],
  captureConfrimAadhar:[`Done, your account is created and your account number is 40003005067`],

  capturePin: ['<%= pin %>.']


};
