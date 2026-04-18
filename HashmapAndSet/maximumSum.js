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

// Time Complexity: O(n) where n is the number of elements in the input array.
// It would be O(n * m) where m is the number of digits in the largest number, 
// since we calculate the digit sum for each number which takes O(m) time,
// but since m is capped by a constant (the maximum number of digits in an integer), 
// we can treat it as O(1) for the purposes of big O notation, resulting in O(n).
// Space Complexity: O(1) since we are only storing the top two maximum values for each digit sum,
// and the number of unique digit sums is limited by the range of possible digit sums 
// (which is at most 9 * number of digits in the largest number, or 81 for numbers up to 10^9).
