const minStartValue = (nums) => {
  let prefixSum = 0;
  let minPrefixSum = 0;

  for (let num of nums) {
    prefixSum += num;
    minPrefixSum = Math.min(prefixSum, minPrefixSum);
  }

  // If the real minimum prefix sum is greater than 0,
  // minPrefixSum will be 0 thanks to how it is initialized,
  // so we can just return 1 - minPrefixSum in all cases.
  return 1 - minPrefixSum;
};

// Time complexity: O(n)
// Space complexity: O(1)
