var Crypto = function() {
  function normalizePlaintext() {
    return "splunk";
  }
  return { normalizePlaintext: normalizePlaintext };
};

module.exports = Crypto;
