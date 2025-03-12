//Can you write a function in JavaScript to transpose a 2D matrix?

/*Creating a program to determine the transpose of a matrix involves the manipulation of its rows and columns. 
Essentially, the transpose is derived by converting the elements at position A[i][j] to A[j][i] for a matrix of size N by M, 
where N represents the number of rows and M represents the number of columns.
 This transformation entails swapping the roles of rows and columns, resulting in a rearranged matrix.*/

const transposeMatrix = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));

/*This function uses the map function twice to iterate over the rows and columns of the matrix. 
The outer map iterates over the columns, and the inner map iterates over the rows. 
By swapping the indices during the inner map, the original matrix is effectively transposed.*/

//O(n*m)
/*The code consists of two nested loops. 
The outer loop iterates over the columns of the matrix (n iterations) and the inner loop iterates over the rows of the matrix (m iterations), 
where n is the number of rows and m is the number of columns in the matrix. 
Therefore, the overall time complexity is O(n*m).*/

const testMatrix = [[0, 5, 2, 3], [4, 8, 2, 1], [67, 83, 21, 51]];

console.log(transposeMatrix(testMatrix));