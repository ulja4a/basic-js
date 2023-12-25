const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const rT = options.repeatTimes || 1;
  const s = options.separator || '+';
  const ad = options.addition === undefined ? '' : String(options.addition);
  const adRT = options.additionRepeatTimes || 1;
  const adS = options.additionSeparator || '|';
  const repeatedString = new Array(adRT).fill(ad).join(adS);
  console.log(repeatedString)
  const resultArray = new Array(rT).fill(String(str) + repeatedString);
  return resultArray.join(s);
}


module.exports = {
  repeater
};
