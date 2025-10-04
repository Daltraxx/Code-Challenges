const smallestDivisor = (nums, threshold) => {
  const check = (divisor) => {
    let sum = 0;
    for (let num of nums) {
      sum += Math.ceil(num / divisor);
    }

    return sum <= threshold;
  }
  let left = 1, right = 10 ** 6;
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

const nums = [1, 2, 5, 9],
  threshold = 6;

console.log(smallestDivisor(nums, threshold));