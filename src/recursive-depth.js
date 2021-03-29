const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let res = 0;
    arr.forEach((e) => {
      if (Array.isArray(e)) {
        count = this.calculateDepth(e);
        if (res < count) {
          res = count;
        }
      }
    })

    res += 1;
    return res;
  }
};