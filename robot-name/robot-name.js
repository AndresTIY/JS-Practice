function Robot() {
  var robotName;

  function randomNumber() {
    var min = Math.ceil(1);
    var max = Math.floor(9);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function randomChar() {
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alpha.charAt(Math.floor(Math.random() * alpha.length));
  }

  function randomName() {
    var letters = "";
    var nums = "";
    for (var i = 1; i <= 2; i++) {
      letters += randomChar();
    }
    for (var i = 1; i <= 3; i++) {
      nums += randomNumber();
    }
    robotName = letters + nums;
    return robotName;
  }

  function resetName() {
    return (robotName = "");
  }

  return {
    name: randomName(),
    reset: resetName
  };
}
module.exports = Robot;

//first two letters must be uppercase
//followed by 3 digits

// function School() {
//   var roster = {};
//
//   function getRoster() {
//     return roster;
//   }
//   return {
//     roster: getRoster
//   };
// }
