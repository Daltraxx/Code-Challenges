//Implement a function that flattens a nested array in JavaScript, converting it into a single-level array. 

const flattenArray = (nestedArr) => nestedArr.flat(Infinity);

//O(n)
/*The flat method is called with the argument Infinity, 
which means it will recursively flatten the nested array until all levels are flattened. 
This will result in a linear time complexity as each element in the array needs to be visited once.*/

console.log(flattenArray([0, 1, 2, 3, [0, [7, 9]], 55]));
