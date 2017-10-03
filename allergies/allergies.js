var Allergies = function(score) {
  this.score = score;
  var numString = String(score);
  var allergensList = {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  };
  var finalList = [];

  function list() {
    if (numString == Object.keys(allergensList)) {
      finalist.push(allergensList[score]);
    }
    return finalList;
  }

  return {
    list: list
  };
};

// Allergies.prototype.list = function() {

//   return score;
// };

module.exports = Allergies;

// Object.keys(list) returns just the keys
