function Robot() {
  var robotName = "";
  var alpa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function randomNumber() {
    var min = Math.ceil(1);
    var max = Math.floor(9);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function randomName() {
    return robotName;
  }

  return {
    name: randomName()
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
