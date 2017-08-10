var at = function(hr, min) {
  var time;

  if (min == undefined) {
    time = "0" + hr + ":00";
  }

  return time;
};

module.exports = { at: at };
