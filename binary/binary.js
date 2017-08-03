function Binary(num) {
  function toDecimal() {
    var l = num.length;
    var total = 0;
    var n = l - 1;
    for (var i = 0; i < l; i++) {
      var exp = num[i] * Math.pow(2, n);
      n = n - 1;
      total = total + exp;
    }
    return total;
  }
  return {
    toDecimal: toDecimal
  };
}
module.exports = Binary;
