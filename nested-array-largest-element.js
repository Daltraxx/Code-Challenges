//Write a JavaScript program to find the largest element in a nested array. 

const largestnumber = (array) => {
    let largestElement = array[0][0];
    for (let nestedArray of array) {
        for (let element of nestedArray) {
            if (element > largestElement) {
                largestElement = element;
            }
        }
    }

    return largestElement;
}

//O(n*m)
/*The code iterates through each element in the 2D array, 
where 'n' represents the number of nested arrays and 'm' represents the number of elements in each nested array. 
Therefore, the time complexity is O(n*m).*/

let testArray = [];

const randomNumber = () => Math.floor(Math.random() * 100);

for (let i = 0; i < 30; i++) {
    testArray.push([randomNumber(), randomNumber()]);
}

console.log(testArray);
console.log(largestnumber(testArray));