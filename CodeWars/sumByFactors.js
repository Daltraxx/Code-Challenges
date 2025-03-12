function sumOfDivided(lst) {
    if (lst.length === 0) return [];

    //get max absolute value from lst
    const maxNumber = lst.reduce((maxValue, currentValue) => Math.max(Math.abs(currentValue), maxValue), -Infinity);  

    const primeNumbers = new Array(maxNumber + 1).fill(true);
    primeNumbers[0] = primeNumbers[1] = false;

    const result = [];

    for (let i = 2; i < primeNumbers.length; i++) {
        if (primeNumbers[i]) {
            //sieve of eratosthenes, preemptively mark numbers as non-prime
            for (let j = i * i; j < primeNumbers.length; j += i) primeNumbers[j] = false;
            
            let sum = 0;
            let primeFactor = false;
            for (let num of lst) {
                if (num % i === 0) {
                    primeFactor = true;
                    sum += num;
                }
            }

            if (primeFactor) result.push([i, sum]);

        }
    }

    return result;
}

const lst = [
    107, 158, 204, 100,
    118, 123, 126, 110,
    116, 100
];
console.log(sumOfDivided(lst));