var at = function(hr, min) {
  var h = hr;
  if (h < 10) {
    h = "0" + h;
  }
  if (min < 10) {
    min = "0" + min;
  }
  var min = min || "00";
  return h + ":" + min;
};

module.exports = { at: at };
