function Sublist(listOne) {
  this.listOne = listOne;
  function compareList(listTwo) {
    if (Array.isArray(listTwo)) {
      return "SUBLIST";
    }
    if (listOne === listTwo || listOne === undefined || listTwo === undefined) {
      return "EQUAL";
    }
  }
  return {
    compare: compareList
  };
}

module.exports = Sublist;
