const add = function(...args) {
	return args.reduce((total, arg) =>{
    return total + arg;
  },0);
};

const subtract = function() {
	return arguments[0]- arguments[1];
};

const sum = function(arr) {
	return arr.reduce((total, arg) => total + arg,0);
};

const multiply = function(arr) {
  return arr.reduce((total,num) =>{
    return total*num;
  },1)
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	if (a===0) {
    return 1;
  }
  return factorial(a-1)*a;
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
