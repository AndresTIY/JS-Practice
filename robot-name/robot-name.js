function Robot() {
  var robotName = "CD123";

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
