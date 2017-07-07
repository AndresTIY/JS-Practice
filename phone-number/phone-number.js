var PhoneNumber = function(num) {
  this.num = num;
};

PhoneNumber.prototype.number = function(num) {
  this.num = num;

  return num;
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
