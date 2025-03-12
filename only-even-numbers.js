//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

const onlyEvens = (numberArray) => {
    return numberArray.filter((number) => number % 2 === 0);   
}

const numberArray = [];
for (let i = 0; i < 100; i++) {
    numberArray.push(i);
};

console.log(onlyEvens(numberArray));