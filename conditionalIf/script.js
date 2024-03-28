/*
In JavaScript, the if statement is a control flow structure used to make decisions based on conditions. 
It allows you to execute a certain block of code if a condition evaluates to true, and optionally, to execute
 another block of code if that condition is false.
*/

if (condition) {
     // code to be executed if condition is true 
}

//Example: 
const age = 18 
if (age >= 18) { 
    console.log('You are of legal age') 
}
 
//Else -> It is possible to use the else keyword to execute a different code block if the condition is false:

const agee = 17 
if (age >= 18) { 
    console.log('You are over 18') 
} else { 
    console.log('You are under 18') 
}

/*Else if -> Is used when you need to evaluate multiple conditions in sequence. This allows you to handle multiple 
possible cases in an orderly fashion and execute the block of code associated with the first condition that 
evaluates to true.
*/ 
const ageee = 17 
if (age >= 18) { 
    console.log('You are of age') 
} else if (age >= 16) { 
    console.log('You are almost of age') 
} else { 
    console.log('You are under age') 
}
 