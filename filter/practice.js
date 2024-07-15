/*
You have an array of strings containing different words, your challenge is to return an array only with those that meet the condition of having 4 or more letters.

To solve this you will find a function called filterByLength that receives an input parameter:

array: An array of strigs with words
Inside the body of the filterByLength function you must write your solution.
*/

function filterByLength (array) {
    return array.filter(item => item.length >= 4)
}


//   Example 1:
const example1 = ['love', 'sun', 'stone', 'day']
console.log("Filter array 1: ", filterByLength(example1)); 


//   Example 2:
const example2 = ['rose', 'goal', 'fish', 'day', 'glasses']
console.log("Filter array 2: ", filterByLength(example2)); 

