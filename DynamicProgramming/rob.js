const rob = (nums) => {
  const maxMoney = (i) => {
    if (i === 0) {
      return nums[0];
    }

    if (i === 1) {
      return Math.max(nums[0], nums[1]);
    }

    return Math.max(maxMoney(i - 2) + nums[i], maxMoney(i - 1));
  }

  return maxMoney(nums.length - 1);
}

const nums = [1, 2, 3, 1];

console.log(maxMoney(nums));