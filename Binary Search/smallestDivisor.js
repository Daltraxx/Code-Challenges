const smallestDivisor = (nums, threshold) => {
  const check = (divisor) => {
    let sum = 0;
    for (let num of nums) {
      sum += Math.ceil(num / divisor);
    }

    return sum <= threshold;
  }

  let left = 1, right = Math.max(...nums);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// Time O(nlogk)
// Space O(1)

const nums = [44, 22, 33, 11, 1],
  threshold = 5;

console.log(smallestDivisor(nums, threshold));