const factorialWhile = (num) => {
    let result = num;
    while (num > 1) {
        result = result * (num - 1);
      num--;
    }
    return result;
}

const factorialFor = (num)  => {
    let result = num;
    for (let i = num - 1; i > 0; i--) {
        result *= i;
    }

    return result;
}

//console.log(factorialFor(6));

//O(n)

const recursiveFactorial = (num) => {
    if (num === 1) {
        return 1;
    } else {
        return num * recursiveFactorial(num - 1);
    }

}

console.log(recursiveFactorial(6));

//O(n)
/*The recursiveFactorial function calls itself recursively n times, where n is the input number. 
Each recursive call decrements the input number by 1 until it reaches 1 or 0. 
Therefore, the time complexity is O(n) where n is the input number.*/

