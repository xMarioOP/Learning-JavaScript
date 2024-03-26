/*
typeof is an operator used to get the data type of an expression or variable. 
It returns a string indicating the data type of the operand.
*/
typeof 42; // "number"
typeof "Hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (this is a historical error in JavaScript)
typeof []; // "object" (arrays in JavaScript are of type "object")
typeof {}; // "object" (objects in JavaScript are of type "object")
typeof function() {}; // "function
typeof NaN; // "number" (NaN is a special numeric value meaning "Not a Number")

const MAGIC_NUMBER = 7
typeof MAGIC_NUMBER // "number"


