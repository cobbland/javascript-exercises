const add = function(a,b) {
	return +a + +b;
};

const subtract = function(a,b) {
	return +a - +b;
};

const sum = function(arr) {
	return arr.reduce((a,b) => a + b, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc,item) => acc * item);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
  if (num <= 1) {
    return 1;
  }
  let factor = num;
  for (let counter = (num - 1); counter > 0; counter--) {
    factor *= counter;
  }
	return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
