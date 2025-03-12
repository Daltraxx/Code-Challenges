// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 

const  mergeSortedArrays = (arr1, arr2) => {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

//O(n log n)
/*The time complexity is O(n log n) 
because the sort() method has a time complexity of O(n log n) 
in the worst case scenario.*/

const mergeSortedArraysLoop = (arr1, arr2) => {
    const mergedArray = [];
    while (arr1.length > 0 && arr2.length > 0) {
        arr1[0] <= arr2[0] ? mergedArray.push(arr1.shift()) : mergedArray.push(arr2.shift());
    }
    arr1.length !== 0 ? mergedArray.push(...arr1) : mergedArray.push(...arr2);
    return mergedArray;
}

//O(n)
/*The time complexity of this code is O(n) where n is the total number of elements in both input arrays. 
The while loop iterates through the arrays until one of them is empty, and the push and shift operations inside the loop are constant time operations. 
The final step of pushing the remaining elements from the non-empty array also takes O(n) time.*/

const arr1 = [];
const arr2 = [];

for (let i = 0; i < 20; i +=2) {
    arr1.push(i);
}

for (let i = 1; i < 20; i +=2) {
    arr2.push(i);
}


console.log(mergeSortedArraysLoop(arr1, arr2));