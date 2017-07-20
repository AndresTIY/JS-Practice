function FoodChain() {
  var endOfVerse =
    "I don't know why she swallowed the fly. Perhaps she'll die.\n";
  var verse1 = "I know an old lady who swallowed a fly.\n" + endOfVerse;
  var verse2;
  function song(num) {
    switch (num) {
      case 1: {
        return verse1;
        break;
      }
      default:
        return;
    }
  }

  return {
    verse: song
  };
}
module.exports = FoodChain;
