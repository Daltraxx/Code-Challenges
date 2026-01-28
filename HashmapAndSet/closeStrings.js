const closeStrings = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  const freq1 = new Array(26).fill(0);
  const freq2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    freq1[word1.charCodeAt(i) - "a".charCodeAt(0)]++;
    freq2[word2.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  // Same character set check
  for (let i = 0; i < 26; i++) {
    if ((freq1[i] === 0) !== (freq2[i] === 0)) return false;
  }

  freq1.sort();
  freq2.sort();

  // Same frequency distribution check
  for (let i = 0; i < 26; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }

  return true;
};

// Time complexity: O(n) where n is the length of the input strings. 
// Sorting takes O(1) time since there are at most 26 unique characters, 
// but would make the time complexity O(n log n) if the input was not limited to lowercase English letters.
// Space complexity: O(1) since the space used by the frequency arrays is fixed at 26.
