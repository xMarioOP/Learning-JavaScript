/*
JavaScript (JS) offers a variety of built-in methods for efficiently manipulating arrays of data. These methods simplify 
common tasks such as adding, removing, modifying, and searching for elements in an array. Here's an explanation of some of 
the most commonly used methods:
*/

//push(): This method adds one or more elements to the end of an array and returns the new length of the array.
const fruits = ['apple', 'banana'];
fruits.push('orange'); // ['apple', 'banana', 'orange']


//pop(): This method removes the last element from an array and returns it. The array is modified.
const fruits2 = ['apple', 'banana', 'orange'];
const removedFruit = fruits.pop(); // 'orange'
// fruits is now ['apple', 'banana']


//shift(): This method removes the first element from an array and returns it. The array is modified.
const fruits3 = ['apple', 'banana', 'orange'];
const removedFruit2 = fruits.shift(); // 'apple'
// fruits is now ['banana', 'orange']


//unshift(): This method adds one or more elements to the beginning of an array and returns the new length of the array.
const fruits4 = ['banana', 'orange'];
fruits.unshift('apple'); // ['apple', 'banana', 'orange']


//splice(): This method changes the contents of an array by adding new elements while removing old elements.
const fruits5 = ['apple', 'orange', 'grape'];
fruits.splice(1, 1, 'banana', 'kiwi'); // ['apple', 'banana', 'kiwi', 'grape']


//slice(): This method returns a shallow copy of a portion of an array into a new array.
const fruits6 = ['apple', 'banana', 'orange', 'grape'];
const slicedFruits = fruits.slice(1, 3); // ['banana', 'orange']



//You can know the length of a collection of elements using the .length property:
const fruits7 = ["apple", "pear", "banana", "strawberry"]
console.log(fruits.length) // 4

