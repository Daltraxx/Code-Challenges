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