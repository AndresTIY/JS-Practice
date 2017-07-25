function Etl() {
  function transform(transOld) {
    var transNew = {};
    Object.keys(transOld).forEach(function(key) {
      transOld[key].forEach(function(val) {
        transNew[val.toLowerCase()] = parseInt(key);
      });
    });
    return transNew;
  }
  return {
    transform: transform
  };
}

module.exports = Etl;
// var old = {1: ['A']}
//var new = {a: 1}
// var str = theText.split('A').join('')
