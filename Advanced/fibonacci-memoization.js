//Create a JavaScript function that returns the Fibonacci sequence up to a given number, utilizing memoization for optimized performance. 

const fibonacci = (num) => {
    let memo = [0, 1];
    for (let i = 2; i < num; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }

    return memo;
}

//O(n)
/*The code iterates through the 'num' elements in the 'memo' array once, 
resulting in a linear time complexity of O(n), where n is the value of 'num'.*/


console.log(fibonacci(10));