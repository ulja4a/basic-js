const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let current = 1;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      current++;
    } else {
      newArr.push(current > 1 ? current + arr[i] : arr[i]);
      current = 1;
    }
  }

  return newArr.join('');
}

module.exports = {
  encodeLine
};
