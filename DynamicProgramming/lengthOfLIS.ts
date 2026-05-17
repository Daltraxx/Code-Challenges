const lengthOfLISTopDown = (nums: number[]): number => {
  const getMaxSubseq = (i: number): number => {
    if (memo[i]) return memo[i];

    memo[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        memo[i] = Math.max(getMaxSubseq(j) + 1, memo[i]);
      }
    }
    return memo[i];
  };

  const n = nums.length;
  const memo = new Array(n);
  let maxSubseq = 0;
  for (let i = 0; i < n; i++) {
    maxSubseq = Math.max(getMaxSubseq(i), maxSubseq);
  }
  return maxSubseq;
};

// Time complexity: O(n^2) - We iterate through each element and for each element,
// we check all previous elements.
// Space complexity: O(n) - We use a memoization array to store the results of subproblems,
// and the recursion stack can go as deep as n in the worst case.

const lengthOfLISBottomUp = (nums: number[]): number => {
  const n = nums.length;
  const dp = new Array(n).fill(1);
  let maxSubseq = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
        maxSubseq = Math.max(dp[i], maxSubseq);
      }
    }
  }
  return maxSubseq;
};

// Time complexity: O(n^2) - We iterate through each element and for each element,
// we check all previous elements.
// Space complexity: O(n) - We use a dp array to store the length 
// of the longest increasing subsequence ending at each index.

const lengthOfLISBinarySearch = (nums: number[]): number => {
  // tails[i] will hold the smallest possible ending value
  // of an increasing subsequence of length i+1.
  // Smaller tails are better because 
  // they give more room for future numbers to extend the subsequence.
  const tails: number[] = [];
  for (const num of nums) {
    // Find first index where num <= tails[index]
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (num <= tails[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    if (left === tails.length) {
      // Each time we push a new number, 
      // it means we found a longer increasing subsequence.
      tails.push(num);
    } else {
      // We greedily replace the existing tail with num
      // to allow for potentially longer subsequences in the future.
      tails[left] = num;
    }
  }

  return tails.length;
};

// Time complexity: O(n log n) - We iterate through each element and for each element,
// we perform a binary search on the tails array.
// Space complexity: O(n) - In the worst case, the tails array can grow to the size of n,
// if all elements are increasing.