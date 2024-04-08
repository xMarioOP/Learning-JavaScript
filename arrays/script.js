/*
In JavaScript, an array is a data structure used to store multiple values in a single variable.  These values can be of any data type,
 including numbers, strings, objects, or even other arrays, allowing for flexible data organization.
*/

//Declaration: You can declare an array using square brackets [] and assign it to a variable:
let array = [];   
//Example: numbers array 1-5
let numbersArray = [1,2,3,4,5]

//The elements of an array can be of any type, including other arrays.  
[1, 2, 3, 4, [5, 6, 7, 8, 9]]
['Hello', 2, true, null, undefined] // this is not always advisable

//To assign an array to a variable, we do the same as with the other data types:
const numbers = [1, 2, 3, 3, 4, 5]
let names = ['Sam', 'Sarah', 'Carl']

/*
Accessing Elements: You can access elements of an array using square brackets [] and the index of the element
     (arrays in JavaScript are zero-indexed, meaning the first element is at index 0):
*/
let myArray = [10, 20, 30];
console.log(myArray[0]); // Output: 10
console.log(myArray[1]); // Output: 20
//If we try to access an element that does not exist, it will return undefined.
const numbers2 = [1, 2, 3, 4, 5]
console.log(numbers[10]) // undefined


//modifying elements of an array
numbers2 = [1, 2, 3, 4, 5]

numbers[0] = 10
numbers[2] = 30

console.log(numbers) // output [10, 2, 30, 4, 5]
