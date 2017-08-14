var Raindrops = function(num) {
  this.num = num;
};
Raindrops.prototype.convert = function(num) {
  if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
    return "PlingPlangPlong";
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return "PlingPlang";
  }
  if (num % 3 === 0 && num % 7 === 0) {
    return "PlingPlong";
  }
  if (num % 5 === 0 && num % 7 === 0) {
    return "PlangPlong";
  }

  if (num % 3 === 0) {
    return "Pling";
  }
  if (num % 5 === 0) {
    return "Plang";
  }
  if (num % 7 === 0) {
    return "Plong";
  } else {
    return String(num);
  }
};
module.exports = Raindrops;
