"use strict";

const imagesBuilder = require("./images-builder");
const logger = require("../logger");

/**
 * buildBasicCardActionsOnGoogle builds basic cards for Actions on Google
 * @param {Object} cardData 
 * @example 
 *  {
 *      "formattedText": "Card Description (required)",
 *      "title": "Card Title (optional)",
 *      "subtitle": "Card Subtitle (optional)",
 *      "imageUri": "http://imageUrl.com (optional and protocol must be http/https)",
 *      "imageAccessibilityText": "Image description for screen readers (required only if imageUri given)",
 *      "buttons": [{
 *          "title": "Card Link title (optional)",
 *          "uri": "https://linkUrl.com (required only if title given and protocol must be http/https)"
 *      }]
 *  }
 */
const buildBasicCardActionsOnGoogle = (cardData) => {
    let buttons = [];
    if(!cardData.formattedText) {
        logger.log("error", "Parameter 'formattedText' is required");
        throw new Error("Parameter 'formattedText' is required");
    }
    if(cardData.buttons.length > 0) {
        cardData.buttons.forEach((button) => {
            if(!button.title) {
                logger.log("error", "Please enter button 'title'");
                throw new Error("Please enter button 'title'");
            }
            if(!button.uri) {
                logger.log("error", `Parameter 'uri' for button '${button.title}' is required`);
                throw new Error(`Parameter 'uri' for button '${button.title}' is required`);
            }
            buttons.push({
                "title": button.title,
                "openUriAction": {
                    "uri": button.uri
                }
            });
        });
    }
    return {
        "platform": "ACTIONS_ON_GOOGLE",
        "basicCard": {
            "title": cardData.title ? cardData.title : "",
            "subtitle": cardData.subtitle ? cardData.subtitle : "",
            "formattedText": cardData.formattedText,
            "image": imagesBuilder.buildImageActionsOnGoogle(cardData),
            "buttons": buttons
        }
    }
}

/**
 * buildBasicCardFacebookMessenger builds basic cards for Facebook Messenger
 * @param {Object} cardData 
 * @example 
 *  {
 *      "title": "Card Title (required)",
 *      "subtitle": "Card Subtitle (optional)",
 *      "imageUri": "http://imageUrl.com (optional and protocol must be http/https)",
 *      "buttons": [{
 *          "title": "Card Link title (optional)",
 *          "postback": "Text or URL (optional)"
 *      }]
 *  }
 */
const buildBasicCardFacebookMessenger = (cardData) => {
    let buttons = [];
    if(!cardData.title) {
        throw new Error("Parameter 'title' is required");
    }
    if(cardData.buttons && cardData.buttons.length > 0) {
        cardData.buttons.forEach((button) => {
            if(button.title) {
                buttons.push({
                    "text": button.title,
                    "postback": button.postback ? button.postback : ""
                });
            } else {
                throw new Error("Parameter 'title' for the button is required");
            }
        });
    }
    return {
        "platform": "FACEBOOK",
        "card": {
            "title": cardData.title,
            "subtitle": cardData.subtitle ? cardData.subtitle : "",
            "imageUri": cardData.imageUri ? cardData.imageUri : "",
            "buttons": buttons
        }
    }
}

module.exports = { buildBasicCardActionsOnGoogle, buildBasicCardFacebookMessenger };
