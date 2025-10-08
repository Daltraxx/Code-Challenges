const splitArray = (nums, k) => {
  let minimizedLargestSum = 0;
  const check = (minSum) => {
    let currentSum = 0;
    let subArrayCount = 0;
    let largestSum = 0;
    for (let num of nums) {
      if (currentSum + num > minSum) {
        subArrayCount++;
        currentSum = 0;
      }
      currentSum += num;
      largestSum = Math.max(currentSum, largestSum);
      if (currentSum > k) return false;
    }

    if (currentSum > k) return false;
    largestSum = Math.max(currentSum, largestSum);
    if (currentSum > 0) subArrayCount++;
    if (subArrayCount === k) {
      minimizedLargestSum = largestSum;
      return true;
    }
    return false;
  }
  let left = Infinity, right = 0;
  for (let num of nums) {
    left = Math.min(num, left); 
    right += num;
  }

  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);
    if (check(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
}

const nums = [7, 2, 5, 10, 8],
  k = 2;

console.log(splitArray(nums, k));