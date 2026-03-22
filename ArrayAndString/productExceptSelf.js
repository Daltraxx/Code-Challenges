//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

const productExceptSelf = (nums) => {
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        answer.push(nums.reduce((accumulator, currentValue, index) => index !== i ? currentValue * accumulator : accumulator, 1));
    }

    return answer;
}

//O(n^2)
/*The code has a nested loop structure where for each element in the input array, 
a reduce function is called which iterates over the entire array. 
This results in a time complexity of O(n^2).*/

const productExceptSelfLeftRight = (nums) => {
    let left = new Array(nums.length);
    let right = new Array(nums.length);

    //left[i] will contain the product of all numbers to left of i
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            left[i] = 1;
        } else {
            left[i] = left[i - 1] * nums[i - 1];
        }
    }

    //right[i] will contain the product of all numbers to right of i
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            right[i] = 1;
        } else {
            right[i] = right[i + 1] * nums[i + 1];
        }
    }

    let answer = [];
    //product except self will = left[i] * right[i]
    for (let i = 0; i < nums.length; i++) {
        answer.push(left[i] * right[i]);
    }

    return answer;
}

//O(n)
/*The code consists of three loops that iterate through the input array of length n. 
Each loop has a time complexity of O(n), 
resulting in a total time complexity of O(n) for the entire function.*/

const productExceptSelfConstantSpace = (nums) => {
    let answer = new Array(nums.length);

    //answer[i] will contain the product of all numbers to left of i
    for (let i = 0; i < answer.length; i++) {
        if (i === 0) {
            answer[i] = 1;
        } else {
            answer[i] = answer[i - 1] * nums[i - 1];
        }
    }

    //to save space, simply use variable for keeping track of product of all numbers to right of i
    let right = 1;
    for (let i = answer.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * right;
        right *= nums[i];
    }

    return answer;
}

//O(n)
/*The code consists of two loops, each iterating through the input array of length n once. 
Therefore, the time complexity is O(n).*/

const nums = [1, 2, 3, 4];

console.log(productExceptSelfConstantSpace(nums));