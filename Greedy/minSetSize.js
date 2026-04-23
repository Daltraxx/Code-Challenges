const minSetSize = (arr) => {
  const frequencies = new Map();
  for (let num of arr) {
    frequencies.set(num, (frequencies.get(num) || 0) + 1);
  }

  const sortedFrequencies = [...frequencies.values()].sort((a, b) => b - a);

  let removed = 0;
  const target = arr.length / 2;
  let setSize = 0;

  for (let frequency of sortedFrequencies) {
    removed += frequency;
    setSize++;
    if (removed >= target) return setSize;
  }

  return setSize;
};

// Time complexity: O(n log n) due to sorting the frequencies.
// Space complexity: O(n) for the frequency map and sorted array.
