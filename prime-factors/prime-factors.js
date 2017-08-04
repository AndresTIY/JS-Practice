function find_factors(n) {
  if (n <= 1 || !n) {
    return [];
  }
  var i = 2;
  while (n % i) {
    i++;
  }
  var factors = [];
  factors.push(i);
  var more = find_factors(n / i);
  if (more.length) {
    factors = factors.concat(more);
  }
  return factors;
}

var prime_factors = {
  for: find_factors
};

module.exports = prime_factors;
