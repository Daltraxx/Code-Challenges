/*You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
Any answer with a calculation error less than 10-5 will be accepted.*/

const findMaxAverage = (nums, k) => {
    let sums = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        sums.push(sums[i - 1] + nums[i]);
    }

    let maxAverage = sums[k - 1] / k;
    for (let i = k; i < sums.length; i++) {
        maxAverage = Math.max(maxAverage, (sums[i] - sums[i - k]) / k);
    }

    return maxAverage;
}

/*Time complexity : O(n). 
We iterate over the nums array of length n once to fill the sum array. 
Then, we iterate over n−k elements of sum to determine the required result.*/

const findMaxAverageSlidingWindow = (nums, k) => {
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxSum = sum;

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k;
}

/*Time complexity : O(n). 
We iterate over the given nums array of length n once only.*/

let nums = [1,12,-5,-6,50,3];
let k = 4;

console.log(findMaxAverageSlidingWindow(nums, k));