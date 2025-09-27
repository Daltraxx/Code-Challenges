const answerQueries = (nums, queries) => {
  const binarySearch = (arr, target) => {
    let left = 0;
    right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] > target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  nums.sort((a, b) => a - b);

  const numsPrefix = [];
  let sum = 0;
  for (let num of nums) {
    sum += num;
    numsPrefix.push(sum);
  }

  return queries.map((query) => binarySearch(numsPrefix, query));
};

// Time complexity O(nlogn + n + mlogn) or O(nlogn + mlogn) = O((n+m)logn) ... n is dominated by nlogn so not necessary to include
// Space O(n) for prefix sum array, could be reduced to O(1) if we overwrite input nums array

const nums = [4, 5, 2, 1],
  queries = [3, 10, 21];

console.log(answerQueries(nums, queries));
