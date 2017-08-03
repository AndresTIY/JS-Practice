function Binary(num) {
  function toDecimal() {
    return Number(num);
  }
  return {
    toDecimal: toDecimal
  };
}
module.exports = Binary;
