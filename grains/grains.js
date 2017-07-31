var BigInt = require("./big-integer.js");
function Grains() {
  function square(num) {
    return String(BigInt(2).pow(num - 1));
  }
  return {
    square: square
  };
}
module.exports = Grains;
