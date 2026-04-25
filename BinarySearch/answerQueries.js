const answerQueries = (nums, queries) => {
  // Upper bound binary search to find the rightmost 
  // insertion point for the query in the prefix sums array
  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] > target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    // left is the index of the first element greater than target,
    // and is therefore the count of elements that can be included 
    // without exceeding the query
    return left;
  };

  const prefix = nums.toSorted((a, b) => a - b);
  for (let i = 1; i < prefix.length; i++) {
    prefix[i] += prefix[i - 1];
  }

  return queries.map((query) => binarySearch(prefix, query));
};

// Time complexity: O(n log n + m log n) 
// where n is the length of nums and m is the length of queries
// Space complexity: O(n) for the prefix sums array