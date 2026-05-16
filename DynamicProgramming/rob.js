const robTopDown = (nums) => {
  const maxMoney = (i) => {
    if (i === 0) {
      return nums[0];
    }

    if (i === 1) {
      return Math.max(nums[0], nums[1]);
    }

    if (memo[i] !== undefined) {
      return memo[i];
    }

    memo[i] = Math.max(maxMoney(i - 2) + nums[i], maxMoney(i - 1));

    return memo[i];
  };

  const n = nums.length;
  const memo = new Array(n);

  return maxMoney(n - 1);
};

// Time complexity: O(n) - the max money for each index
// is calculated once and stored in the memo
// Space complexity: O(n) - for the memo array
// and call stack in the worst case

const robBottomUp = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }
  const n = nums.length;
  const maxMoney = new Array(n);
  maxMoney[0] = nums[0];
  maxMoney[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    maxMoney[i] = Math.max(maxMoney[i - 2] + nums[i], maxMoney[i - 1]);
  }

  return maxMoney[n - 1];
};

// Time O(n) - we calculate the max money for each index once
// Space O(n) - for the maxMoney array

const robBottomUpConstantSpace = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }

  let backTwo = nums[0];
  let backOne = Math.max(nums[0], nums[1]);
  let maxMoney = backOne;
  for (let i = 2; i < nums.length; i++) {
    maxMoney = Math.max(backTwo + nums[i], backOne);
    backTwo = backOne;
    backOne = maxMoney;
  }

  return maxMoney;
};

// Time O(n) - we calculate the max money for each index once
// Space O(1) - we only use a few variables to keep track of the max money at each index
