const maximumSum = (nums) => {
  const digitSumMap = new Map();
  let maxSum = -1;
  for (const num of nums) {
    let digitSum = 0;
    let temp = num;
    while (temp > 0) {
      digitSum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    if (digitSumMap.has(digitSum)) {
      const currentMax = digitSumMap.get(digitSum);
      maxSum = Math.max(currentMax + num, maxSum);
      digitSumMap.set(digitSum, Math.max(currentMax, num));
    } else {
      digitSumMap.set(digitSum, num);
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
