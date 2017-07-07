var PhoneNumber = function(string) {
  this.phoneNo = PhoneNumber.sanitizeNumber(string);
  var area = "";
};

PhoneNumber.sanitizeNumber = function(string) {
  var regex = /[^0-9]/g;
  var numbers = string.replace(regex, "");
  if (numbers.length === 10) {
    return numbers;
  } else if (numbers.length > 10 && numbers.charAt(0) === "1") {
    return numbers.slice(1);
  } else {
    return "0000000000";
  }
};

PhoneNumber.prototype.number = function() {
  return this.phoneNo;
};
PhoneNumber.prototype.areaCode = function() {
  area = this.phoneNo.slice(0, 3);
  return area;
};
PhoneNumber.prototype.toString = function() {
  var middle = this.phoneNo.slice(3, 6);
  var end = this.phoneNo.slice(6, 10);
  return `(${area}) ${middle}-${end}`;
};

module.exports = PhoneNumber;

//10 digit numbers
//1 , first digit = international country code
//3 digits after = numbering plan area code, area code
//3 digits after = exchange code
//4 digits after, last ones = subscriber number

//N any digit from 2 to 9
//X any digit from 0 to 9
//(NXX)-NXX-XXXX

//clean up telephone number
//remove punctuation
//remove country code
// var n = [2, 3, 4, 5, 6, 7, 8, 9];
// var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
