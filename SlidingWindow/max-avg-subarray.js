const findMaxAverage = (nums, k) => {
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

// Time complexity: O(n) where n is the length of the input array nums, 
// as we need to iterate through the array once to calculate the sum of each subarray of size k.
// Space complexity: O(1)