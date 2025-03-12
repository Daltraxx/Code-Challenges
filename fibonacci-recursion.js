const fibonacci = (num) => {
    if (num <= 1) {
        return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

//O(2^n)
/*The fibonacci function has a time complexity of O(2^n) because it makes two recursive calls for each input value, 
leading to an exponential growth in the number of function calls and computations.*/

const printFibonacciSequence = (numTerms) => {
    const sequence = [];
    for (let i = 0; i < numTerms; i++) {
        sequence.push(fibonacci(i));
    }

    return sequence;
}

console.log(printFibonacciSequence(10));