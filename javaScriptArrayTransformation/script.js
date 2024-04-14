//JavaScript arrays can undergo various transformations depending on the requirements. Here are some common array transformations:

/*
Filter: The filter method creates a new array with all elements that pass the test implemented by the provided function.
*/
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);
// Output: [2, 4, 6]. In this example, evenNumbers will contain only the elements of the numbers array that are even.



/*
Map: The map method creates a new array with the results of calling a provided function on every element in the calling array.
*/
const numbers2 = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);
// Output: [2, 4, 6, 8, 10]. In this example, doubledNumbers will contain the original numbers from the numbers array, each multiplied by 2.



/*
Reduce: The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
*/
const numbers3 = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
/* Output: 15
In this example, sum will contain the total sum of all elements in the numbers array.


Here's a brief comparison:

- filter: Used to select elements from an array based on a condition.
- map: Used to transform elements of an array based on a function.
- reduce: Used to produce a single value by applying a function against an accumulator and each element in the array (from left to right).
*/
