/*
switch statement is a control flow statement that allows you to execute different blocks of code based on the value of an expression. 
It provides a more concise way to write multiple if statements when you need to check the value of a single variable against multiple possible values.
*/

switch (expression) {
    case value1:
      // Code to be executed if expression === value1
      break;
    case value2:
      // Code to be executed if expression === value2
      break;
    // Additional cases as needed
    default:
      // Code to be executed if expression doesn't match any case
  }
/*
- The switch statement evaluates the expression and then compares the resulting value with the values specified in case clauses.
- If a match is found, the block of code associated with that case is executed.
- The break statement is used to exit the switch block once a match is found. If omitted, the execution will continue to the next case 
regardless of whether there's a match, until either a break statement is encountered or the end of the switch statement is reached.
- The default case is optional and is executed if no case matches the expression.
*/

let fruit = 'Apple';

switch (fruit) {
  case 'Banana':
    console.log('Banana is yellow.');
    break;
  case 'Apple':
    console.log('Apple is red.');
    break;
  case 'Orange':
    console.log('Orange is orange.');
    break;
  default:
    console.log('Unknown fruit.');
}

//In this example, since fruit is 'Apple', the code inside the case 'Apple' block will be executed, resulting in the output: "Apple is red."