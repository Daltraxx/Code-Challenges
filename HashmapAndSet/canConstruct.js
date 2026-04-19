const canConstruct = (ransomNote, magazine) => {
  const getCharIndex = (char) => {
    return char.charCodeAt(0) - 97;
  };

  const charCounts = new Array(26).fill(0);
  for (const char of magazine) {
    charCounts[getCharIndex(char)]++;
  }

  for (const char of ransomNote) {
    const i = getCharIndex(char);
    if (--charCounts[i] < 0) return false;
  }

  return true;
};

// Time Complexity: O(n + m), where n is the length of ransomNote 
// and m is the length of magazine.
// Space Complexity: O(1), since the charCounts array 
// has a fixed size of 26.