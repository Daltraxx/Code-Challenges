const lengthOfLISTopDown = (nums: number[]): number => {
  const getMaxSubseq = (i: number): number => {
    if (memo[i]) return memo[i];
    if (i == 0) {
      memo[i] = 1;
      return memo[i];
    }

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

const lengthOfLISBottomUp = (nums: number[]): number => {
  const n = nums.length;
  const dp = new Array(n).fill(1);
  dp[0] = 1;
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
}
