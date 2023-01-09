'use strict';

const { asArray } = require('@webdeveric/utils');
const { isObject } = require('@webdeveric/utils/type-predicate');

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
  makeOptionsArray,
};
