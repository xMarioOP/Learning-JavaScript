/*
Sum of Elements in an Array
Create a program that takes an array of numbers as input and calculates the sum of all elements in
that array
*/
let sumNumbersArray = [1, 2, 3, 4, 5]
let total = 0

function sumArrayElements(array) {
    array.forEach(number => {
        total += number
    });
}

console.log("Array of numbers: ", sumNumbersArray)
sumArrayElements(sumNumbersArray)
console.log("Sum =", total)