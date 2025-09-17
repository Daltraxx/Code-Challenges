
const findLeastNumOfUniqueInts = function (arr, k) { 
  let uniqueInts = 0;
  const frequencies = new Map();
  for (let int of arr) {
    if (!frequencies.has(int)) uniqueInts++;
    frequencies.set(int, (frequencies.get(int) || 0) + 1);
  }

  let sortedFrequencyKeys = [...frequencies.keys()].sort((a, b) => frequencies.get(a) - frequencies.get(b));

  let i = 0;
  while (i < sortedFrequencyKeys.length && k > 0) {
    const frequency = frequencies.get(sortedFrequencyKeys[i]);
    if (k < frequency) {
      return uniqueInts;
    }

    k -= frequency;
    uniqueInts--;
    i++;
  }

  return uniqueInts;
}

const arr = [1, 1, 2, 3, 3];
const k = 2;
console.log(findLeastNumOfUniqueInts(arr, 2));