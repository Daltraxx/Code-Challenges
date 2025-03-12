//Can you write a function in JavaScript to calculate the cumulative sum of an array?
/*Cumulative sums, or running totals, are used to display the total sum of data as it grows with time (or any other series or progression). 
This lets you view the total contribution so far of a given measure against time. 
An example of a cumulative sum is: Input array => 10, 15, 20, 25, 30. Output array => 10, 25, 45, 70, 100.*/

const cumulativeSumForLoop = (arr) => {
    let sum = 0;
    const outputArr = [];
    for (let num of arr) {
        sum += num;
        outputArr.push(sum);
    }

    return outputArr;
}

//O(n)
/*The code snippet has a single loop that iterates through each element in the input array 'arr'. 
As a result, the time complexity is linear, O(n), where n is the number of elements in the input array.*/

const cumulativeSumConcise = (arr) => {
    return arr.reduce((acc, curVal) => [...acc, acc.length ? acc[acc.length - 1] + curVal : curVal], []);
}
//O(n)
/*In this function, the reduce method is employed to iterate over the array, 
maintaining an accumulator (acc) that stores the cumulative sum at each step. 
The spread operator (...) is used to create a new array at each step, 
ensuring that the original array remains unchanged. 
This approach provides a concise way to calculate the cumulative sum of the input array.*/

const testArr = [10, 15, 20, 25, 30];

console.log(cumulativeSumConcise(testArr));