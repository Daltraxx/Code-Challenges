const lengthOfLIS = (nums) => {
  const memo = new Map();

  const getLongestSubsequence = (i) => {
    if (memo.has(i)) {
      return memo.get(i);
    }

    let longest = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        longest = Math.max(getLongestSubsequence(j) + 1, longest);
      }
    }

    memo.set(i, longest);

    return longest;
  }

  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    longest = Math.max(getLongestSubsequence(i));
  }

  return longest;
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));