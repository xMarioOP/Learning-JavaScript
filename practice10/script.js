/*
You have an array of numbers, your challenge is to return the numbers of that array multiplied by two.

To solve it you are going to find a function called multiplyElements that receives an input parameter:

array: An array of numbers
Inside the body of the multiplyElements function you must write your solution.
*/

function multiplyElements(array) {
    return array.map(num => num * 2)
}

let example1 = [2, 4, 5, 5, 6, 8]
let result1 = multiplyElements(example1)
console.log("Before map: ", example1);
console.log("After map: ", result1);

let example2 = [1, 1, 1, -2, -3]
let result2 = multiplyElements(example2)
console.log("Before map: ", example2);
console.log("After map: ", result2);