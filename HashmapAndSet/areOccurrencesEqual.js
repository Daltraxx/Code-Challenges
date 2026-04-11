/*Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).*/

const areOccurrencesEqualMap = (s) => {
  const counts = new Map();
  for (const char of s) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  const equalityCheck = counts.get(s[0]);
  for (const count of counts.values()) {
    if (count !== equalityCheck) return false;
  }

  return true;
};

// Time complexity: O(n) where n is the length of the input string. 
// We need to iterate through the input string once to count the frequency of each character, 
// and then we iterate through the counts to check for equality, 
// which takes O(m) time where m is the number of unique characters. 
// In the worst case, m can be equal to n (when all characters are unique), 
// so the overall time complexity is O(n).
// Space complexity: O(1) since the number of unique characters is limited to 26 
// (assuming only lowercase English letters), 
// so the space used by the counts map is constant regardless of the input size.

const areOccurrencesEqualSet = (s) => {
  const counts = new Map();
  for (const char of s) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  const countValues = new Set(counts.values());
  return countValues.size === 1;
};

// Same time and space complexity as the previous solution, 
// though slightly less efficient due to lack of early exit and the overhead of creating a Set.
