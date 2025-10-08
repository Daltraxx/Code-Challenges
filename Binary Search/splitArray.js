const splitArray = (nums, k) => {
  const check = (minLargestSum) => {
    let currentSum = 0;
    let subArrayCount = 0;

    for (let num of nums) {
      if (currentSum + num > minLargestSum) {
        subArrayCount++;
        if (subArrayCount > k) return false;
        currentSum = 0;
      }
      currentSum += num;
    }

    if (subArrayCount + 1 <= k) return true;

    return false;
  };

  let left = -Infinity,
    right = 0;
  for (let num of nums) {
    left = Math.max(num, left);
    right += num;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

const nums = [1, 2, 3, 4, 5],
  k = 1;

console.log(splitArray(nums, k));
