const twoSum = (nums, target) => {
  const numToIndexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
    const complement = target - num;

    if (numToIndexMap.has(complement)) {
      return [numToIndexMap.get(complement), i];
    }

    numToIndexMap.set(num, i);
  }
  return [];
};

// Time complexity: O(n) - We traverse the array once, 
// and each lookup and insertion in the map is O(1).
// Space complexity: O(n) - In the worst case, 
// we could store all n elements in the map if no two numbers sum up to the target.