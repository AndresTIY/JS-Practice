function Binary(num) {
  function toDecimal() {
    var l = num.length;
    var total = 0;
    for (var i = 0; i < l; i++) {
      var n = l - 1;
      var exp = num[i] * Math.pow(2, n);
      n = n - 1;
      return (total = total + exp);
    }
  }
  return {
    toDecimal: toDecimal
  };
}
module.exports = Binary;
