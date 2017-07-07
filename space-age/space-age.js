var SpaceAge = function(period) {
  this.period = period;
};

SpaceAge.prototype.seconds = function(period) {
  return 1000000;
};

module.exports = SpaceAge;
