const maximumSum = (nums) => {
  const digitSumMap = new Map();
  for (const num of nums) {
    let digitSum = 0;
    let temp = num;
    while (temp > 0) {
      digitSum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    const prevPair = digitSumMap.get(digitSum);
    if (!prevPair) {
      digitSumMap.set(digitSum, [num, -1]);
    } else {
      const [max1, max2] = prevPair;
      if (num > max1) {
        prevPair[0] = num;
        prevPair[1] = max1;
      } else if (num > max2) {
        prevPair[1] = num;
      }
    }
  }

  let maxSum = -1;
  for (const numGroup of digitSumMap.values()) {
    const [a, b] = numGroup;
    if (b != -1) {
      maxSum = Math.max(a + b, maxSum);
    }
  }

  return maxSum;
};

// Time Complexity: O(n * k) where n is the number of elements in the input array 
// and k is the number of digits in the largest number.
// Space Complexity: O(n) in the worst case, 
// if all numbers have unique digit sums.
