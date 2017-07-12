function School() {
  var roster = {};

  function getRoster() {
    return roster;
  }
  function addToRoster(student, grade) {
    if (roster.hasOwnProperty(grade)) {
      roster[grade].push(student);
      roster[grade] = roster[grade].sort();
    } else {
      roster[grade] = [student];
    }
  }
  function getGrade(grade) {
    if (roster.hasOwnProperty(grade)) {
      return roster[grade];
    }
    return [];
  }

  return {
    roster: getRoster,
    add: addToRoster,
    grade: getGrade
  };
}
module.exports = School;
