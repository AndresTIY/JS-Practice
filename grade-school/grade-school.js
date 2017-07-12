function School() {
  var roster = {};

  function getRoster() {
    return roster;
  }
  function addToRoster(student, grade) {
    if (roster.hasOwnProperty(grade)) {
      roster[grade].push(student);
    } else {
      roster[grade] = [student];
    }
  }

  return {
    roster: getRoster,
    add: addToRoster
  };
}
module.exports = School;
