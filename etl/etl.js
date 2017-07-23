function Etl() {
  function transform() {
    return { a: 1 };
  }
  return {
    transform: transform
  };
}

module.exports = Etl;
