function weather() {
}

weather.prototype.isWeatherStormy = function() {
  if (Math.random() >= 0.8) {
    return true;
  } else {
    return false;
  }
}
