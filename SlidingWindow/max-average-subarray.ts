/*You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
Any answer with a calculation error less than 10^-5 will be accepted.*/

const findMaxAverage = (nums: number[], k: number): number => {
    let currentSum = 0
    let right: number;
    for (right = 0; right < k; right++) {
        currentSum += nums[right];
    }

    let maxSum = currentSum;

    for (let left = 1; left < nums.length - k + 1; left++) {
        currentSum = currentSum - nums[left - 1] + nums[right];
        maxSum = Math.max(maxSum, currentSum);
        right++;
    }

    return maxSum / k;
}

/*O(n)	
The code consists of two loops. 
The first loop runs for 'k' iterations 
and the second loop runs for 'n - k + 1' iterations. Therefore, 
the overall time complexity is O(n) 
where n is the length of the 'nums' array.*/

const nums = [1,12,-5,-6,50,3], k = 4;

console.log(findMaxAverage(nums, k)); //12.75000

export {};