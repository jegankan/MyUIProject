var calculator = require('./calculator.js');
var rs = require('readline-sync');

//Calculator
var x = rs.question("Please enter a number --> ");
var operator = rs.question('Please enter an operator (+, - , / , * ) -->');
var y = rs.question('Please enter another number-->');

x=parseInt(x);
y=parseInt(y);

switch(operator){
    case'+':
        calculator.add(x, y);
        break;
    case'-':
        calculator.subtract(x, y);
        break;
    case'*':
        calculator.multiply(x,y);
        break;
    case'/':
        calculator.divide(x, y);
        break;
    default:
    console.log("Something went wrong");
}
