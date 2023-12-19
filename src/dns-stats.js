const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnsStats = {};
  for (let i = 0; i < domains.length; i++) {
    let domainLevels = (domains[i].split('.')).reverse();
    let currentLevel = '';
    for (let j = 0; j < domainLevels.length; j++) {
      currentLevel += `.${domainLevels[j]}`;
      dnsStats[currentLevel] = (dnsStats[currentLevel] || 0) + 1;
    }
  }
  return dnsStats;
}

module.exports = {
  getDNSStats
};
