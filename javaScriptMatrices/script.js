/*
In JavaScript, matrices are typically represented using arrays of arrays. This means that you have an array where each 
element is itself an array, representing a row of the matrix. Each inner array can have a different length, allowing for 
irregular matrices where each row can have a different number of elements.
*/
 const matrix = [
    [1, 2, 3],
    [4, 5, 6]
  ];
/*
In this example, matrix is a 2x3 matrix where the first row is [1, 2, 3] and the second row is [4, 5, 6]. Each row is 
represented as an array, and the entire matrix is an array of arrays.

You can access elements of the matrix using two indices: the row index and the column index. For example:
*/
console.log(matrix[0][1]); // Output: 2
//This accesses the element at row 0 (the first row) and column 1 (the second column), which is 2.


//We can use nested loops to iterate over all the elements of an array. Here is an example of how to do this using a for loop:
for (let i = 0; i < matrix[i].length; i++) { // {1}
    for (let j = 0; j < matrix[i].length; j++) { // {2}
      console.log(matrix[i][j])
    }
  }

/*In this example, the outer loop traverses {1} each row of the matrix, while the inner loop {2} traverses each element 
within a specific row.
*/