var BeerSong = function() {};

BeerSong.prototype.song = function() {};
BeerSong.prototype.verse = function(num) {
  this.value = num;

  return (
    num +
    " bottles of beer on the wall, " +
    num +
    " bottles of beer.\nTake one down and pass it around, " +
    num -
    1 +
    " bottles of beer on the wall.\n"
  );
};
module.exports = BeerSong;
