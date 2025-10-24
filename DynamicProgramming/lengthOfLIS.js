const lengthofLIS = (nums) => {
  const dp = (i) => {

    let longest = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        longest = Math.max(dp(j) + 1, longest);
      }
    }

    return longest
  }

  return dp(nums.length - 1);
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthofLIS(nums));