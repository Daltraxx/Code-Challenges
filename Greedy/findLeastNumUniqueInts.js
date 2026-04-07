const findLeastNumOfUniqueInts = function (arr, k) {
  const frequencies = new Map();
  for (const num of arr) {
    frequencies.set(num, (frequencies.get(num) || 0) + 1);
  }

  let uniqueInts = frequencies.size;

  const frequencyVals = [...frequencies.values()].sort((a, b) => a - b);

  for (const frequency of frequencyVals) {
    if (k >= frequency) {
      k -= frequency;
      uniqueInts--;
    } else {
      break;
    }
  }

  return uniqueInts;
};

// Time Complexity: O(n log n) due to sorting the frequency values
// Space Complexity: O(n) due to the frequency map and array of frequency values
