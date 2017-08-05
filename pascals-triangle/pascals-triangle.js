function Triangle(rowNum) {
  this.rowNum = rowNum;

  function rows() {
    var arr = [rowNum];
    return [arr];
  }
  return {
    rows: rows()
  };
}
module.exports = Triangle;
