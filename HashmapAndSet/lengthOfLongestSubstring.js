const lengthOfLongestSubstring = (s) => {
  const currChars = new Set();
  let longestSubstring = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    while (currChars.has(char)) {
      currChars.delete(s[left]);
      left++;
    }
    currChars.add(char);
    longestSubstring = Math.max(right - left + 1, longestSubstring);
  }

  return longestSubstring;
};

// Time complexity: O(n) where n is the length of the input string.
// We iterate through the input string once,
// and each character is added and removed from the set at most once.
// Space complexity: O(min(m, n)), or O(n) in the worst case
// where all characters are unique.

const lengthOfLongestSubstringOptimized = (s) => {
  const charToIdx = new Map();
  let longestSubstring = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    const prevIdx = charToIdx.get(char);
      if (prevIdx !== undefined) {
        // Max is necessary to prevent left from moving backwards 
        // in the case of a repeated character that is outside the current window.
      left = Math.max(prevIdx + 1, left);
    }
    charToIdx.set(char, right);
    longestSubstring = Math.max(right - left + 1, longestSubstring);
  }

  return longestSubstring;
};

// Same time and space complexity as the previous solution, but strictly fewer operations.
