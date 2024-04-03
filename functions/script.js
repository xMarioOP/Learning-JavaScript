/*
a function is a block of reusable code designed to perform a particular task. Functions are one of the fundamental building blocks of JavaScript
 programming, allowing developers to encapsulate logic, organize code, and promote reusability.
*/

/*Function Declaration: You can define a function using the function keyword followed by the function name and a pair of parentheses (). 
The function body is enclosed in curly braces {}.
*/
function sayHello() {
    console.log("Hello!");
}


/*Function Invocation: After declaring a function, you can execute or call it by using its name followed by parentheses (). 
This triggers the execution of the code inside the function body.
*/
sayHello(); // Output: Hello!


/*
Function Parameters: Functions can accept input values called parameters. Parameters are listed within the parentheses when 
defining the function.
*/
function greet(name) {
    console.log("Hello, " + name + "!");
}


/*
Arguments: When you call a function, you can pass values, known as arguments, inside the parentheses. These arguments will be used 
as the values of the corresponding parameters.
*/
greet("John"); // Output: Hello, John!


/*
Return Statement: Functions can return values using the return statement. This statement stops the execution of the function 
and returns a value to the caller.
*/
function add(a, b) {
    return a + b;
}

let result = add(3, 5);
console.log(result); // Output: 8


/*
Function Scope: Variables declared inside a function are scoped to that function and are not accessible from outside
*/
function myFunction() {
    let x = 10;
    console.log(x); // Output: 10
}

console.log(x); // Error: x is not defined
