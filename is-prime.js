//Write a JavaScript function to check if a given number is prime. 

const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true;
}

console.log(isPrime(21));

// O(sqrt(n))
/*The function iterates up to the square root of the input number 'number' in the for loop. 
Therefore, the time complexity is O(sqrt(n)).*/