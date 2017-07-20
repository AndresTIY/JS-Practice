function FoodChain() {
  var endOfVerse =
    "I don't know why she swallowed the fly. Perhaps she'll die.\n";
  var verse1 = "I know an old lady who swallowed a fly.\n" + endOfVerse;
  var verse2 =
    "I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n" +
    "She swallowed the spider to catch the fly.\n" +
    endOfVerse;
  var verse3 =
    "I know an old lady who swallowed a bird.\n" +
    "How absurd to swallow a bird!\n" +
    "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
    "She swallowed the spider to catch the fly.\n" +
    endOfVerse;
  var verse4 =
    "I know an old lady who swallowed a cat.\n" +
    "Imagine that, to swallow a cat!\n" +
    "She swallowed the cat to catch the bird.\n" +
    "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
    "She swallowed the spider to catch the fly.\n" +
    endOfVerse;
  var verse5 =
    "I know an old lady who swallowed a dog.\n" +
    "What a hog, to swallow a dog!\n" +
    "She swallowed the dog to catch the cat.\n" +
    "She swallowed the cat to catch the bird.\n" +
    "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
    "She swallowed the spider to catch the fly.\n" +
    endOfVerse;
  var verse6 =
    "I know an old lady who swallowed a goat.\n" +
    "Just opened her throat and swallowed a goat!\n" +
    "She swallowed the goat to catch the dog.\n" +
    "She swallowed the dog to catch the cat.\n" +
    "She swallowed the cat to catch the bird.\n" +
    "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
    "She swallowed the spider to catch the fly.\n" +
    endOfVerse;
  var verse7 =
    "I know an old lady who swallowed a cow.\n" +
    "I don't know how she swallowed a cow!\n" +
    "She swallowed the cow to catch the goat.\n" +
    "She swallowed the goat to catch the dog.\n" +
    "She swallowed the dog to catch the cat.\n" +
    "She swallowed the cat to catch the bird.\n" +
    "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
    "She swallowed the spider to catch the fly.\n" +
    endOfVerse;
  var verse8 =
    "I know an old lady who swallowed a horse.\n" + "She's dead, of course!\n";

  function song(num) {
    switch (num) {
      case 1:
        return verse1;
        break;
      case 2:
        return verse2;
        break;
      case 3:
        return verse3;
        break;
      case 4:
        return verse4;
        break;
      case 5:
        return verse5;
        break;
      case 6:
        return verse6;
        break;
      case 7:
        return verse7;
        break;
      case 8:
        return verse8;
        break;
      default:
        return;
    }
  }

  return {
    verse: song
  };
}
module.exports = FoodChain;
