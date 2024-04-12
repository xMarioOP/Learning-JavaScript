//JavaScript arrays have a built-in method called sort() that can be used to sort the elements of an array.

//Syntax:
array.sort(compareFunction)

/*
array: The array you want to sort.
compareFunction (optional): A function that defines the sort order. If omitted, the array elements are converted to strings, then 
sorted based on their Unicode values.
Example:
*/
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
numbers.sort(); // [1, 1, 2, 3, 4, 5, 5, 6, 9]


/*
Custom Sorting:
If you want to sort elements in an order other than lexicographic (default for strings) or numerical order, you can provide a compare 
function to the sort() method.

Compare Function:
A compare function takes two parameters, conventionally named a and b, representing two elements being compared. It should return:

- A negative value if a should come before b.
- Zero if a and b are considered equal (maintaining their original order).
- A positive value if b should come before a
*/
const numbers2 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
numbers.sort((a, b) => a - b); // Sorting in ascending order
/* Result: [1, 1, 2, 3, 4, 5, 5, 6, 9]
In this example, the compare function a - b returns a negative value if a is less than b, hence sorting the array in ascending order.

Descending Order:
To sort in descending order, simply change the order of a and b in the compare function or return b - a.
*/
numbers.sort((a, b) => b - a); // Sorting in descending order
// Result: [9, 6, 5, 5, 4, 3, 2, 1, 1]



/*
sort() modifies the original array, if you don't want to modify it you can use the .toSorted() method.
*/
let numbers3 = [5, 10, 2, 25, 7]  

let numbersSorted = numbers.toSorted((a, b) => {
  return a - b
})

console.log(numbersSorted) // [2, 5, 7, 10, 25].
console.log(numbers) // [5, 10, 2, 25, 7]

//You could also use the spread operator (...) to create a copy of the original array and sort it:
let numbers4 = [5, 10, 2, 25, 7] 

const copyNumbers = [...numbers]
// we sort the copy and not the original
copyNumbers.sort((a, b) => a - b)

console.log(copyNumbers) // [2, 5, 7, 10, 25]  
console.log(numbers) // [5, 10, 2, 25, 7].