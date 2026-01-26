const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;
  
  const reqCharCounts = new Map();
  let distinctCharsRemaining = 0;

  for (let char of s1) {
    reqCharCounts.set(char, (reqCharCounts.get(char) || 0) + 1);
    if (reqCharCounts.get(char) === 1) distinctCharsRemaining++;
  }

  let left = 0;
  for (let right = 0; right < s2.length; right++) {
    const rightChar = s2[right];
    if (reqCharCounts.has(rightChar)) {
      reqCharCounts.set(rightChar, reqCharCounts.get(rightChar) - 1);
      if (reqCharCounts.get(rightChar) === 0) distinctCharsRemaining--;
    }

    // Maintain valid window size
    if (right - left + 1 > s1.length) {
      const leftChar = s2[left];
      if (reqCharCounts.has(leftChar)) {
        reqCharCounts.set(leftChar, reqCharCounts.get(leftChar) + 1);
        if (reqCharCounts.get(leftChar) === 1) distinctCharsRemaining++;
      }
      left++;
    }

    if (distinctCharsRemaining === 0) return true;
  }

  return false;
};

// Time Complexity: O(n + m) where n and m are lengths of s1 and s2 respectively
// Space Complexity: O(1) if we consider the character set size to be fixed (e.g., lowercase English letters),
//                   or O(k) where k is the number of unique characters in s1
