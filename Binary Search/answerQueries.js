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

const nums = [4, 5, 2, 1],
  queries = [3, 10, 21];

console.log(answerQueries(nums, queries));
