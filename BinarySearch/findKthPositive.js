const findKthPositive = (arr, k) => {
  let missingNums = 0;
  let currNum = 1;
  for (let includedNum of arr) {
    if (includedNum !== currNum) {
      const gap = includedNum - currNum;
      if (missingNums + gap >= k) {
        // - 1 to account for currNum being the first missing number
        return currNum + k - missingNums - 1;
      }
      missingNums += gap;
    }
    currNum = includedNum + 1;
  }
  return arr.at(-1) + k - missingNums;
};

// Time Complexity: O(n) where n is the length of arr
// Space Complexity: O(1)

const findKthPositiveBinarySearch = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const missingNums = arr[mid] - (mid + 1);
    if (missingNums < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left + k;
};

// Time Complexity: O(log n) where n is the length of arr
// Space Complexity: O(1)