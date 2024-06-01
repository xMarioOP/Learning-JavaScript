/*
In JavaScript, an object is a data structure that allows you to store and organize data. Objects are collections of key-value 
pairs where each key is a unique identifier (usually a string) and each value can be any data type, including other objects, functions, 
arrays, or primitive data types like strings, numbers, and booleans.
Example:
*/
const person = {
  name: "John",
  age: 30,
  isStudent: false,
  address: {
    city: "New York",
    country: "USA"
  },
  sayHello: function () {  //When a function is used on an object it is called  a method
    console.log("Hello, my name is " + this.name);
  }
};

console.log(person.name); // Outputs: John
console.log(person.age); // Outputs: 30
console.log(person.address.city); // Outputs: New York
person.sayHello(); // Outputs: Hello, my name is John
/*
In this example, person is an object with several properties: name, age, isStudent, address, and sayHello. Each property has 
a corresponding value. The address property itself is another object containing its own properties (city and country). The sayHello 
property contains a function.


Objects in JavaScript are dynamic, meaning you can add, modify, or delete properties at any time:
*/
person.gender = "Male"; // Adding a new property
console.log(person.gender); // Outputs: Male

person.age = 31; // Modifying an existing property
console.log(person.age); // Outputs: 31

delete person.isStudent; // Deleting a property
console.log(person.isStudent); // Outputs: undefined
/*
JavaScript objects provide a flexible and powerful way to organize and manipulate data in your code. They are commonly used in various 
scenarios, including representing real-world entities, managing application state, and organizing code into reusable modules.
*/