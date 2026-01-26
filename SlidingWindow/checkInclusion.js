const checkInclusion = (s1, s2) => {
  const reqCharCounts = new Map();
  const reqCharsInWindow = new Map();
  let distinctCharsRemaining = 0;

  for (let char of s1) {
    reqCharCounts.set(char, (reqCharCounts.get(char) || 0) + 1);
    if (reqCharCounts.get(char) === 1) distinctCharsRemaining++;
  }

  let left = 0;
  for (let right = 0; right < s2.length; right++) {
    const rightChar = s2[right];
    if (reqCharCounts.get(rightChar)) {
      reqCharsInWindow.set(rightChar, (reqCharsInWindow.get(rightChar) || 0) + 1);
      if (reqCharCounts.get(rightChar) === reqCharsInWindow.get(rightChar))
        distinctCharsRemaining--;
    }

    // Maintain valid window size
    if (right - left + 1 > s1.length) {
      const leftChar = s2[left];
      if (reqCharsInWindow.has(leftChar)) {
        reqCharsInWindow.set(leftChar, reqCharsInWindow.get(leftChar) - 1);
        if (reqCharsInWindow.get(leftChar) === reqCharCounts.get(leftChar) - 1)
          distinctCharsRemaining++;
      }
      left++;
    }

    if (distinctCharsRemaining === 0) return true;
  }

  return false;
};
