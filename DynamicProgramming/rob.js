const robTopDown = (nums) => {
  const memo = new Map();
  const maxMoney = (i) => {
    if (i === 0) {
      return nums[0];
    }

    if (i === 1) {
      return Math.max(nums[0], nums[1]);
    }

    if (memo.has(i)) {
      return memo.get(i);
    }

    memo.set(i, Math.max(maxMoney(i - 2) + nums[i], maxMoney(i - 1)));

    return memo.get(i);
  }

  return maxMoney(nums.length - 1);
}

// Time O(n)
// Space O(n)

const nums = [2, 7, 9, 3, 1];
console.log(robTopDown(nums));

const robBottomUp = (nums) => {
  const maxMoney = new Array(nums.length);
  maxMoney[0] = nums[0];
  maxMoney[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < maxMoney.length; i++) {
    maxMoney[i] = Math.max(maxMoney[i - 2] + nums[i], maxMoney[i - 1]);
  }

  return maxMoney.at(-1);
}

console.log(robBottomUp(nums));