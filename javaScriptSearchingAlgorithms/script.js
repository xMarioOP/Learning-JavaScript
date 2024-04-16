/*
JavaScript offers a variety of searching algorithms for finding elements in arrays or other data structures efficiently. 
Here are some common searching algorithms implemented in JavaScript:
*/


/*
Linear Search: This is the simplest search algorithm. It sequentially checks each element of the array until a match is found 
or the end of the array is reached. It has a time complexity of O(n), where n is the number of elements in the array.
*/
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i; // Return the index of the target element if found
      }
    }
    return -1; // Return -1 if the target element is not found
  }


/*
Binary Search: This is a more efficient search algorithm, but it requires that the array be sorted beforehand. It works by repeatedly 
dividing the search interval in half until the target element is found or the interval is empty. It has a time complexity of O(log n).
*/
function binarySearch(array, target) {
    let low = 0;
    let high = array.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (array[mid] === target) {
        return mid; // Return the index of the target element if found
      } else if (array[mid] < target) {
        low = mid + 1; // Continue searching in the right half
      } else {
        high = mid - 1; // Continue searching in the left half
      }
    }
  
    return -1; // Return -1 if the target element is not found
  }


/*
Bubble Sort: This is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them 
if they are in the wrong order. It has a time complexity of O(n^2), making it inefficient on large lists.
*/
function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // Swap array[j] and array[j+1]
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array; // Return the sorted array
  }
  
  