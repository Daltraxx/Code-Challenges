const maxNumberOfApples = (weight) => {
  let limit = 5000;
  let maxApples = 0;

  weight.sort((a, b) => a - b);
  for (const w of weight) {
    if (w <= limit) {
      limit -= w;
      maxApples++;
    } else {
      break;
    }
  }
  
  return maxApples;
};

// Time complexity: O(n log n) where n is the number of elements in the input list weight.
// This is because we need to sort the list of weights,
// which takes O(n log n) time.
// Space complexity: O(1) since we sort the list in place 
// and use only a constant amount of extra space for the limit and maxApples variables.