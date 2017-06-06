var Isogram = function(string) {
  this.value = string;
};
Isogram.prototype.isIsogram = function(string) {
  string = this.value;
  var arr = string.split("");
  var seen = [];
  for (var i = 0; i < arr.length; i++) {
    if (seen.indexOf(arr[i]) < 0) {
      seen.push(arr[i]);
    } else {
      return false;
    }
  }
  return true;
};

module.exports = Isogram;
