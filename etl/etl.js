function Etl() {
  function transform(val) {
    var transKey = val[1];
    var transKeyProp = 1;
    return { transKey: transKeyProp };
    // return transKey;
  }
  return {
    transform: transform
  };
}

module.exports = Etl;
// var old = {1: ['A']}
//var new = {a: 1}
// var str = theText.split('A').join('')
