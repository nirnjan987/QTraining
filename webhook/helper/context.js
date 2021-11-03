'use strict';

/**
 * Helps in fetching a value of particular parameter from any context
 * To get all the parameter contained in the context use 'ALL_PARAMS'
 * @param {object} df
 * @param {string} param
 * @param {string} context
 * @param {boolean} allParams
 */
const getCtxParamValue = (df, param, context = 'global-parameters') => {
    const rawContext = df.getContext(context.toLowerCase());
    const contextParams = (rawContext && rawContext.parameters) || {};
    return (param === 'ALL_PARAMS') ? contextParams : contextParams[param];
};

/**
 * This function helps in managing the count of any parameter,
 * can also be use to check if attempt limit is exceeded or not.
 * @param {object} df
 * @param {string} parameter
 * @param {number} retryCountLimit
 */
const isRetryLimitExceeded = (df, parameter, retryCountLimit) => {
    const globalParams = getCtxParamValue(df, 'ALL_PARAMS', 'global-parameters', true);
    let result = false;

    if (!globalParams[parameter]) {
        globalParams[parameter] = 1;
    } else if (globalParams[parameter] <= retryCountLimit) {
        globalParams[parameter] += 1;
    }

    if (globalParams[parameter] > retryCountLimit) {
        result = true;
    }
    df.setOutputContext('global-parameters', 99, globalParams);
    return result;
};

/**
 * Function returns number of attempt made
 * @param {object} df
 * @param {string} parameter
 * @param {number} retryCountLimit
 */
const attemptCount = (df, parameter, retryCountLimit) => {
    const globalParams = getCtxParamValue(df, 'ALL_PARAMS', 'global-parameters', true);
    let result = false;

    if (!globalParams[parameter]) {
        globalParams[parameter] = 1;
    } else if (globalParams[parameter] <= retryCountLimit) {
        globalParams[parameter] += 1;
    }

    if (globalParams[parameter] > retryCountLimit) {
        result = true;
    }
    df.setOutputContext('global-parameters', 99, globalParams);

    return globalParams[parameter];
};

module.exports = { getCtxParamValue, isRetryLimitExceeded, attemptCount };