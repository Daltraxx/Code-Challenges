const countElements = (arr) => {
  const numSet = new Set(arr);
  let count = 0;
  for (let num of arr) {
    if (numSet.has(num + 1)) count++;
  }

  return count;
};

// Time complexity: O(n) where n is the number of elements in the input array.
// We need to iterate through the input array to create the set,
// which takes O(n) time.
// We also need to iterate through the input array again to count the elements,
// which takes O(n) time.
// Space complexity: O(n) for the set.

const countElementsFilter = (arr) => {
  const numSet = new Set(arr);
  return arr.filter((num) => numSet.has(num + 1)).length;
};

// Same time and space complexity as the previous solution,
// but uses the filter method to create a new array of elements
// that have a corresponding element that is one greater.

const countElementsReduce = (arr) => {
  const numSet = new Set(arr);
  return arr.reduce((acc, num) => (numSet.has(num + 1) ? acc + 1 : acc), 0);
};

// Same time and space complexity as the previous solutions,
// but uses the reduce method to count the number of elements
// that have a corresponding element that is one greater.