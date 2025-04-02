function squareSum(numbers){
    return numbers.reduce((sum, num) => sum += num**2, 0);
}

const numbers = [1, 2, 2];
console.log(squareSum(numbers));