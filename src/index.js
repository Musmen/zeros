
module.exports = function zeros(expression) {
  var twoCounter = 0;
  var fiveCounter = 0; 

  var getStep = function(element) {
    return (element.indexOf('!!') == -1) ? 1 : 2;
  }

  var getValue = function(element) {
    return parseInt(element, 10);
  }

  var countTwoFiveMultipliers  = function(factorialMultiplier) {
    while (true) {
      if (factorialMultiplier % 5 == 0) {
        fiveCounter++;
        factorialMultiplier /= 5;
      } else if (factorialMultiplier % 2 == 0) {
        twoCounter++;
        factorialMultiplier /= 2;
      } else break;
    }
  };

  var checkFactorialMultipliers = function (factorialMaxMultiplier, increment) {
    for (var i = factorialMaxMultiplier; i > 0;) {
      countTwoFiveMultipliers(i);
      i -= increment;
    }
  }
  
  // *** item :  ['5!']  ['7!']  ['6!!'] ...  
  var countZeros = function(item) {
    var step = getStep(item);
    var value = getValue(item);
    checkFactorialMultipliers(value, step);
  }

  // *** expression : ('5!*7!*6!!*7!!')
  expression.split('*').forEach(countZeros);

  return Math.min(twoCounter, fiveCounter);
}