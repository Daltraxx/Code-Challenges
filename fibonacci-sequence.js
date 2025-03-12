// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 

const fibonacciSequence = (numTerms) => {
    const sequence = [0, 1];
    while (sequence.length < numTerms) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }

    return sequence;
}

console.log(fibonacciSequence(5));

//O(n)
/*
The time complexity of this code is O(n) where n is the input numTerms. 
The while loop iterates until the sequence array reaches the desired number of terms, 
which is directly proportional to the input numTerms.
*/