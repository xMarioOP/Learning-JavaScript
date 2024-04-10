//To iterate through a JavaScript array, you can use various methods 

/*
1. While loop:
The while loop continues to execute a block of code while a specified condition is true. You can use a while loop to iterate 
through an array by incrementing an index variable until it reaches the array's length.
*/
const array = [1, 2, 3, 4, 5];
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}


/*
2. For loop:
The for loop is commonly used for iterating through arrays. It consists of three parts: initialization, condition, and iteration. 
You can use a for loop to iterate through each element of an array by accessing elements using the loop index.
*/
const array2 = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}


/*
3. For...of loop:
The for...of loop is a modern iteration feature introduced in ES6. It provides a more concise and readable way to iterate over 
elements in an array without explicitly managing the index.
*/
const array3 = [1, 2, 3, 4, 5];
for (const item of array) {
  console.log(item);
}


/*
4. forEach method:
The forEach method is an array method that executes a provided function once for each array element. It provides a clean and 
concise way to iterate through each element in the array without explicitly managing the index.
*/
const array4 = [1, 2, 3, 4, 5];
array.forEach(item => {
  console.log(item);
});