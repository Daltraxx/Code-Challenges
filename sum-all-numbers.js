//Implement a function to find the sum of all the numbers in an array. 

const sumAllNumbers = (arr) => {
    const sumArr = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    return sumArr;
}

//O(n)
/*The code uses the reduce method which iterates through each element in the array once, 
resulting in a linear time complexity of O(n) where n is the number of elements in the input array.*/

const testArr = [5, 7, 2, 6];

console.log(sumAllNumbers(testArr));