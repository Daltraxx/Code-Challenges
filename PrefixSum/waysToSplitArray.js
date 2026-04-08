const waysToSplitArray = (nums) => {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);

  let runningSum = 0;
  let validSplits = 0;

  // We can stop at nums.length - 1 because we can't split after the last element
  for (let i = 0; i < nums.length - 1; i++) {
    runningSum += nums[i];
    if (runningSum * 2 >= totalSum) validSplits++;
  }

  return validSplits;
};

// Time Complexity: O(n) - We traverse the array twice
// (once for total sum and once for counting valid splits).
// Space Complexity: O(1) - We use a constant amount of space for variables.
