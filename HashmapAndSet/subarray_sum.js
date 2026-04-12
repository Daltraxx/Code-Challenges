const subarraySum = (nums, k) => {
  const prefix_count = new Map();
  prefix_count.set(0, 1);
  let subarrayCount = 0;
  let currSum = 0;
  for (const num of nums) {
    currSum += num;
    if (prefix_count.has(currSum - k)) {
      subarrayCount += prefix_count.get(currSum - k);
    }
    prefix_count.set(currSum, (prefix_count.get(currSum) || 0) + 1);
  }

  return subarrayCount;
};

// Time complexity: O(n) where n is the number of elements in the input array.
// We iterate through the input array once, performing constant time operations for each element.
// Space complexity: O(n) in the worst case where all prefix sums are unique.