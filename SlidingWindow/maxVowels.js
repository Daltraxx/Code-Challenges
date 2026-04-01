const maxVowels = (s, k) => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let vowelCount = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) vowelCount++;
  }

  let maxVowels = vowelCount;
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) vowelCount--;
    if (vowels.has(s[i])) vowelCount++;
    maxVowels = Math.max(maxVowels, vowelCount);
    // Early exit if we have already found the maximum possible count.
    if (maxVowels === k) break;
  }

  return maxVowels;
};

// Time complexity: O(n), where n is the length of the string s.
// Space complexity: O(1), since the set of vowels is constant in size.
