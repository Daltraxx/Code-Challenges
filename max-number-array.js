//Write a JavaScript program to find the maximum number in an array. 

const maxNumber = (array) => {
    return Math.max(...array);
}

let  testArray = [];

for (i = 0; i < 101; i++) {
    testArray.push(i);
}

console.log(testArray);
console.log(maxNumber(testArray));

//O(n)
/*	The time complexity of this code is O(n) 
because it uses the spread operator (...) to pass all elements of the array to the Math.max function, 
which iterates through each element to find the maximum value.*/