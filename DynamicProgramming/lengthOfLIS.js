const lengthOfLIS = (nums) => {
  const memo = new Map();

  const getLongestSubsequence = (i) => {
    if (memo.has(i)) {
      return memo.get(i);
    }

    let longest = 1; // base case

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
    longest = Math.max(getLongestSubsequence(i), longest);
  }

  return longest;
}

const nums = [1, 3, 6, 7, 9, 4, 10, 5, 6];
console.log(lengthOfLIS(nums));