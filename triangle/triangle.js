var Triangle = function(sideA, sideB, sideC) {
  function kind() {
    if (sideA === sideB && sideB === sideC) {
      return "equilateral";
    }
    if (sideA === sideB || sideB === sideC || sideA === sideC) {
      return "isosceles";
    }
    return "scalene";
  }
  return {
    kind: kind
  };
};

module.exports = Triangle;

// equilateral has all 3 sides the same length

// isosceles has 2 sides as the same

// scalene has all sides of different lengths
