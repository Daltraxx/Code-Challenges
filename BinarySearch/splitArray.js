const splitArray = (nums, k) => {
  const check = (minSum) => {
    let currSum = 0;
    let subarrCount = 1;
    for (const num of nums) {
      if (currSum + num > minSum) {
        subarrCount++;
        currSum = 0;
        if (subarrCount > k) return false;
      }
      currSum += num;
    }
    return true;
  };

  let left = 0;
  let right = 0;
  for (const num of nums) {
    left = Math.max(num, left);
    right += num;
  }
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

// Time complexity: O(n log m) 
// where n is the length of the nums array 
// and m is the sum of the nums array.
// Space complexity: O(1).