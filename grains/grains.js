var BigInt = require("./big-integer.js");
function Grains() {
  function square(num) {
    return String(BigInt(2).pow(num - 1));
  }
  function total() {
    return String(BigInt(2).pow(64).prev());
  }
  return {
    square: square,
    total: total
  };
}
module.exports = Grains;
