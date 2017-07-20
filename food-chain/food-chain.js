function FoodChain() {
  function song(num) {
    if (num === 1) {
      return "I know an old lady who swallowed a fly.\nI don't know why she swallowed the fly. Perhaps she'll die.\n";
    }
  }
  return {
    verse: song
  };
}
module.exports = FoodChain;
