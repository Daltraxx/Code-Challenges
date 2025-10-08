const splitArray = (nums, k) => {
  let minimizedLargestSum = 0;
  const check = (minSum) => {
    let currentSum = 0;
    let subArrayCount = 0;
    let largestSum = 0;
    for (let num of nums) {
      if (currentSum + num > minSum) {
        subArrayCount++;
        if (subArrayCount > k) return false;
        currentSum = 0;
      }
      currentSum += num;
      largestSum = Math.max(currentSum, largestSum);
    }

    largestSum = Math.max(currentSum, largestSum);
    if (currentSum > 0) subArrayCount++;
    if (subArrayCount <= k) {
      minimizedLargestSum = largestSum;
      return true;
    }
    return false;
  }
  let left = -Infinity, right = 0;
  for (let num of nums) {
    left = Math.max(num, left); 
    right += num;
  }

  while (left < right) {
    console.log(`left: ${left}, right: ${right}`);
    const mid = Math.floor((left + right) / 2);
    console.log(`mid: ${mid}`);
    if (check(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return minimizedLargestSum;
}

const nums = [1, 2, 3, 4, 5],
  k = 2;

console.log(splitArray(nums, k));