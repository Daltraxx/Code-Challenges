//Can you write a function in JavaScript to split an array into chunks of a specified size?

const chunkArray = (arr, size) => {
    const chunkArrs = [];

    for (let i = 0; i < arr.length; i += size) {
        let chunk = arr.slice(i, i + size);
        chunkArrs.push(chunk);
    }

    return chunkArrs;
}

//O(n)
/*The code iterates through the input array 'arr' in a single loop, 
with each iteration processing a chunk of 'size' elements. 
The number of iterations is determined by the length of the input array 'arr', 
making the time complexity linear O(n), where n is the number of elements in 'arr'.*/

const chunkArrayConcise = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
/*This one-liner function uses Array.from to create a new array based on the length of the original array divided by the specified chunk size. 
The arrow function inside Array.from then uses slice to extract chunks of the array, ensuring that the chunks do not exceed the array's boundaries.*/

//O(n)
/*The code snippet uses Array.from and slice methods to create chunks of the input array. 
The time complexity is O(n) where n is the length of the input array,
as the code iterates over the input array to create the chunks.*/


const testArr = [5, 6, 3, 12, 66, 77, 22, 232, 43, 54];
console.log(chunkArray(testArr, 2));