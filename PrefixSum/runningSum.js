const runningSum = function (nums) {
  const n = nums.length;
  const prefix = new Array(n);
  prefix[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = nums[i] + prefix[i - 1];
  }
  return prefix;
};

// Time complexity: O(n) - We iterate through the array once to compute the running sum.
// Space complexity: O(n) - We create a new array to store the running sums.

const runningSumInPlace = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};

// Time complexity: O(n) - We iterate through the array once to compute the running sum.
// Space complexity: O(1) - We modify the input array in place without using extra space.