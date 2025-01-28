// F -> C: (32°F − 32) × 5/9 = 0°C

const convertToCelsius = function(temp) {
  return Math.round(((temp - 32) * (5/9)) * 10) / 10;
};

// C -> F: (0°C × 9/5) + 32 = 32°F

const convertToFahrenheit = function(temp) {
  return Math.round(((temp * (9/5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
