const largestUniqueNumber = (nums) => {
  const counts = new Map();

  for (let num of nums) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  let maxUniqueNum = -1;
  for (let [num, frequency] of counts) {
    if (frequency === 1) {
      maxUniqueNum = Math.max(maxUniqueNum, num);
    }
  }

  return maxUniqueNum;
};

// Time Complexity: O(n) - We traverse the array once to count frequencies 
// and then iterate through the map to find the largest unique number 
// (O(n) in the worst case where all numbers are unique).
// Space Complexity: O(n) - In the worst case, all numbers are unique, 
// and we store them in the map.
