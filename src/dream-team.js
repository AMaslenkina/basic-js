const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!(members instanceof Array))
    return false;

  if (members.length === 1) {
    if ( typeof members[0] != 'string')
      return false;
  }

  let result = []
  for (let i of members) {
    if (typeof (i) == 'string') {
      let arr = i.replace(/\s/g, '').toUpperCase().split('')
      result.push(arr[0])
    }
  }
  return result.sort().join('');
};
