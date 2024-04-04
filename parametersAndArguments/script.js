/*
Parameters:
Parameters are the placeholders in the function definition. They represent the values that a function expects to receive when it is called.
 Parameters are specified within the parentheses following the function name. When you define a function, you can declare parameters to act 
 as variables within the function's scope.
*/
function greet(name) {
    console.log("Hello, " + name + "!");
}
/*
In the above function definition, name is a parameter. It acts as a placeholder for the value that will be passed to the function 
when it is called.
*/

/*
Arguments:
Arguments are the actual values that are passed to a function when it is invoked. These values are assigned to the corresponding 
parameters defined in the function declaration. When you call a function, you provide arguments for each of its parameters.
*/
greet("John");
/*
In this function call, "John" is the argument. It is the actual value that will be passed to the greet function, and it will 
be assigned to the name parameter.
*/


// Example: 
//Definition of the "add" function with two parameters: "a" and "b"
function add(a, b) {
    return a + b; // Returns the sum of "a" and "b"
}

// Calling the "add" function with two arguments: 5 and 3
var result = add(5, 3);

console.log(result); // Prints the result of the addition, which is 8
/*
- We define a function called add that takes two parameters a and b.
- Inside the function, it returns the sum of a and b.
- Then, we call the add function passing the arguments 5 and 3.
- The function executes with these arguments and returns the result of the addition, which is 8.
- Finally, the result is stored in the variable result and printed to the console.
*/