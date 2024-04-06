/*
Arrow functions are a concise way to write functions in JavaScript and provide a more streamlined syntax compared to 
traditional function expressions.
*/
// Traditional function expression
function add(a, b) {
    return a + b;
  }
  
  // Arrow function
  const add = (a, b) => a + b;
/*
Instead of the function keyword, we use an arrow => to define the function. We can also omit the parentheses around the parameters 
if we only have one
*/

/*
Arrow functions have several advantages over regular functions in JavaScript. Some of them are:

- More concise syntax: the syntax of arrow functions is shorter and easier to read than the syntax of regular functions, especially when working with single-line functions.

- Implicit return: arrow functions can return the value of the expression without using the return keyword when they are single-line. This makes arrow functions even shorter and easier to read.

- More readable anonymous functions: Arrow functions are a more readable and concise way to create anonymous functions in JavaScript, which can make our code easier to understand.
*/

// Arrow function to square a number
const squareArrow = x => x * x;

console.log(squareArrow(5)); // Output: 25
