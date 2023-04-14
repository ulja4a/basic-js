const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const warning = 'Unable to determine the time of year!';
  const winter = 'winter';
  const autumn = 'autumn';
  const summer = 'summer';
  const spring = 'spring';
  
  if (!date) {
    return warning;
  }
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }
  
  let newDate = new Date(date);
 
  
  let currentMonth = newDate.getMonth();
  if (currentMonth==11 || currentMonth<2) {
    return winter;
  }
  if (currentMonth>=2 && currentMonth<5) {
    return spring;
  }
  if (currentMonth>=5 && currentMonth<8) {
    return summer;
  }
  if (currentMonth>=8 && currentMonth<11) {
    return autumn;
  }
}

module.exports = {
  getSeason
};
