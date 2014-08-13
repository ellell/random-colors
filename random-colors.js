function generateColor() {
  return '#' + Math.random().toString(16).substr(-6)
}

module.exports = function (nrOfColors) {
  var colors = []

  for (var i = 0; i < nrOfColors; i++) {
    colors.push(generateColor())
  }

  return colors
}