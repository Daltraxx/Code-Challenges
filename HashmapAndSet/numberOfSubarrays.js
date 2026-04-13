const numberOfSubarrays = (nums, k) => {
  const prefixOddCounts = new Map();
  // Important: We need to account for the case
  // where a subarray starts from index 0 and has exactly k odd numbers.
  prefixOddCounts.set(0, 1);
  let currPrefixOddCount = 0;
  let subarrayCount = 0;
  for (const num of nums) {
    currPrefixOddCount += num & 1;
    const targetOddCount = currPrefixOddCount - k;
    subarrayCount += prefixOddCounts.get(targetOddCount) || 0;
    const prevPrefixCount = prefixOddCounts.get(currPrefixOddCount) || 0;
    prefixOddCounts.set(currPrefixOddCount, prevPrefixCount + 1);
  }

  return subarrayCount;
};

// Time complexity: O(n) - We traverse the array once.
// Space complexity: O(n) - In the worst case where all numbers are odd
// making all odd counts unique, we could have up to n entries in the map.
