function School() {
  var roster = {};

  function getRoster() {
    return roster;
  }
  function addToRoster(student, grade) {
    roster[grade] = [student];
  }

  return {
    roster: getRoster,
    add: addToRoster
  };
}
module.exports = School;
