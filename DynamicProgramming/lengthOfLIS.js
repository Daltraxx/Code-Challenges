const lengthOfLISTopDown = (nums) => {
  const memo = new Map();

  const getLongestSubsequence = (i) => {
    if (memo.has(i)) {
      return memo.get(i);
    }

    let longest = 1; // base case

    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        longest = Math.max(getLongestSubsequence(j) + 1, longest);
      }
    }

    memo.set(i, longest);

    return longest;
  }

  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    longest = Math.max(getLongestSubsequence(i), longest);
  }

  return longest;
}

const nums = [1, 3, 6, 7, 9, 4, 10, 5, 6];
console.log(lengthOfLISTopDown(nums));

const lengthOfLISBottomUp = (nums) => {
  const longestSubsequences = new Array(nums.length).fill(1);
  let longest = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        longestSubsequences[i] = Math.max(longestSubsequences[j] + 1, longestSubsequences[i]);
        longest = Math.max(longestSubsequences[i], longest);
      }
    }
  }

  return longest;
}

console.log(lengthOfLISBottomUp(nums));

// Same Time and Space Complexities
// Time O(n^2)
// Space O(n)

const lengthOfLISBinarySearch = (nums) => {
  const positions = new Array(nums.length).fill(0);

  const binarySearch = (target, range) => {
    let left = 0;
    let right = range;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (target <= positions[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  let len = 0;
  for (let num of nums) {
    const pos = binarySearch(num, len);
    positions[pos] = num;
    if (pos === len) len++;
  }
  
  return len;
}

console.log(lengthOfLISBinarySearch(nums));