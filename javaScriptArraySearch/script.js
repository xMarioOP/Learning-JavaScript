//JavaScript provides several methods for searching arrays. Here are a few common ones:

/*
indexOf(): This method searches the array for a specified item and returns its index if found. If the item is not found, it returns -1.
*/
const fruits = ["apple", "banana", "orange"];
console.log(fruits.indexOf("banana")); // Output: 1
console.log(fruits.indexOf("grape")); // Output: -1


/*
includes(): This method checks if the array contains a specified item and returns true if found, otherwise false.
*/
const fruits2 = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // Output: true
console.log(fruits.includes("grape")); // Output: false


/*
find(): This method returns the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
*/
const numbers = [1, 2, 3, 4, 5];
const even = numbers.find(num => num % 2 === 0);
console.log(even); // Output: 2


/*
findIndex(): This method returns the index of the first element in the array that satisfies the provided testing function. 
Otherwise, it returns -1.
*/
const numbers2 = [1, 2, 3, 4, 5];
const index = numbers.findIndex(num => num % 2 === 0);
console.log(index); // Output: 1 (index of 2)


/*
some(): This method tests whether at least one element in the array passes the test implemented by the provided function. It returns 
true if any element satisfies the condition, otherwise false.
*/
const numbers3 = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // Output: true


/*
every(): This method tests whether all elements in the array pass the test implemented by the provided function. It returns true if all 
elements satisfy the condition, otherwise false.
*/
const numbers4 = [2, 4, 6, 8, 10];
const allEvenNumbers = numbers.every(num => num % 2 === 0);
console.log(allEvenNumbers); // Output: true
