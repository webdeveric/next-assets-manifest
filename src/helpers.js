'use strict';

const { asArray, getType } = require('@webdeveric/utils');

function isObject(input) {
  return getType(input) === 'Object';
}

function makeOptionsArray(commonOptions = {}, customOptions = []) {
  if (commonOptions === customOptions) {
    return [ commonOptions ];
  }

  return asArray(customOptions)
    .filter(isObject)
    .map(options => ({
      ...commonOptions,
      ...options,
    }));
}

module.exports = {
  isObject,
  makeOptionsArray,
};
