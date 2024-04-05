//A function expression is a function that is assigned to a variable. For example:
// this is a function expression
const sum = function (a, b) {
    return a + b
  }
  sum(1, 2) // 3
  
  // this is a function declaration
  function sum(a, b) {
    return a + b
  }

/*
The behavior is very similar to that of a function declared with the function keyword. However, there is a very important 
difference between the two that you should be aware of: hoisting.
Hoisting is a term used to describe how JavaScript appears to move function declarations to the beginning of the code
 so that you can use them before you even declare them. 
 for example:
 */
 sum(1, 2) // 3

 function sum(a, b) {
   return a + b
 }
/*
Here we first use the function and then declare it, and it works! How can this be, shouldn't it give us an error since 
the function does not exist yet?
What is happening is that JavaScript allocates function declarations in memory during the compilation phase and so when 
the code executes it has access to that memory location referred to by the function.
*/


/*WHAT ABOUT FUNCTION EXPRESSIONS?
Well, hoisting is not applied. For example:
*/
sum(1, 2) // ❌ ReferenceError: sum is not defined.

const sum = function (a, b) {
  return a + b
}