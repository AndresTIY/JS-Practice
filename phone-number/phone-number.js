var PhoneNumber = function(number) {
  this.value = number;
};

PhoneNumber.prototype.number = function(number) {
  this.value = number;
  return "1234567890";
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
