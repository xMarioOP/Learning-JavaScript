/*
Imagine you want to create an object and some of its properties should use existing variables as their values.
*/
const name = 'Spidey';
const universe = 42;

const spiderman = {
    name, // <- automatically assigns the value of the variable name
    universe, // <- automatically assigns the value of the variable universe
    powers: ['web', 'invisibility', 'spider-sense']
};

/*
Note that if we had powers defined outside the object, we could create the object in the same line:
*/
const name2 = 'Spidey';
const universe2 = 42;
const powers = ['web', 'invisibility', 'spider-sense'];

const spiderman2 = { name, universe, powers };
///

/*
Destructuring 
is another useful shortcut in JavaScript for retrieving properties from objects or elements from arrays more concisely. 
Here's an example:
*/
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

// Using destructuring to get properties from the object
const { firstName, lastName, age } = person;

console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe
console.log(age);       // Output: 30

//Destructuring can also be used with function arguments:

function greet({ firstName, lastName }) {
    console.log(`Hello, ${firstName} ${lastName}!`);
  }
  
  greet(person); // Output: Hello, John Doe!
//This is a handy shortcut for extracting values from an object and assigning them to individual variables in a cleaner and more readable way
