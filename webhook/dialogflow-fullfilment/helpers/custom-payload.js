'use strict';

const setMessengerSuggestionChip = (df, categories = []) => {
  const options = categories.map(function (category) {
    return { text: category };
  });
  const payload = {
    richContent:
        [
          [
            {
              options: options,
              type: 'chips'
            }
          ]
        ]
  };
  df.setPayload(payload);
};

module.exports = { setMessengerSuggestionChip };
