//Given an array of numbers, write a function to find the largest and smallest numbers in the array. 

const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return [min, max];
}

//O(n)
/*The code iterates through the input array once to find the minimum and maximum values using Math.min and Math.max functions, 
which have a time complexity of O(n). Therefore, the overall time complexity of the function is O(n).*/

console.log(minMax([56, 6, 97, 76, 21, 99]));