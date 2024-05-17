/*

Recursion in JavaScript refers to the technique where a function calls itself within its own body. This technique is useful for 
solving problems that can be broken down into smaller, similar cases to the original problem. Simply put, it's like having a function 
that "calls itself" until it reaches a base case.

Here's a basic example of a recursive function in JavaScript that calculates the factorial of a number:
*/
function factorial(n) {
    // Base case: if n is 0, the factorial is 1
    if (n === 0) {
      return 1;
    } else {
      // Recursive call: n * factorial(n-1)
      return n * factorial(n - 1);
    }
  }
  
  // Example usage
  console.log(factorial(5)); // Returns 120 (5 * 4 * 3 * 2 * 1).

  /*
In this example, the factorial function is called recursively, decreasing the value of n with each call until it reaches the base 
case (when n is equal to 0), at which point the function stops calling itself and begins returning return values to previous calls 
in the call stack.


Some things to note about recursion in JavaScript:

- Base Case: It's essential to have a base case in a recursive function to prevent it from infinitely calling itself. In the above 
example, the base case is when n is equal to 0.

- Call Stack Issues: Recursion can consume a lot of memory if there are many nested calls. JavaScript has a limit on the call stack 
depth (stack size), so excessive recursive calls can lead to a stack overflow.
.

- Recursion Optimization: Some problems can be solved more efficiently using loops instead of recursion. However, in some cases, recursion 
can make the code clearer and more concise.
 */
