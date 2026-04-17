const groupAnagramFreqKey = (strs) => {
  const groups = new Map();
  for (const str of strs) {
    const freqArr = new Array(26).fill(0);
    for (const char of str) {
      freqArr[char.charCodeAt(0) - 97]++;
    }
    const freqString = freqArr.join(",");
    if (!groups.has(freqString)) {
      groups.set(freqString, []);
    }
    groups.get(freqString).push(str);
  }

  return Array.from(groups.values());
};

// Time complexity: O(n * m) where n is the number of strings
// and m is the average length of the strings (for creating the frequency key).
// Joining the frequency array takes O(26) which is constant, so it does not affect the overall complexity.
// Space complexity: O(n * m) for storing the grouped anagrams.

const groupAnagramsSortedKey = (strs) => {
  const groups = new Map();
  for (const str of strs) {
    const strSorted = [...str].sort().join("");
    if (groups.has(strSorted)) {
      groups.get(strSorted).push(str);
    } else {
      groups.set(strSorted, [str]);
    }
  }

  return Array.from(groups.values());
};

// Time complexity: O(n * m log m) where n is the number of strings 
// and m is the average length of the strings (for sorting each string).
// Space complexity: O(n * m) for storing the grouped anagrams.
