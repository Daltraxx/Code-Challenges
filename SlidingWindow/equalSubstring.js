const equalSubstring = (s, t, maxCost) => {
  let currentCost = 0;
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    currentCost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    while (currentCost > maxCost) {
      currentCost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      left++;
    }
    maxLength = Math.max(right - left + 1, maxLength);
  }
  return maxLength;
};

// Time Complexity: O(n)
// Space Complexity: O(1)