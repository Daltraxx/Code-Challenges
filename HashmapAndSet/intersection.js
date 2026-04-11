/*Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, 
return the list of integers that are present in each array of nums sorted in ascending order.*/

const intersection = (nums) => {
  const counts = new Map();
  for (const arr of nums) {
    for (const num of arr) {
      counts.set(num, (counts.get(num) || 0) + 1);
    }
  }

  const n = nums.length;
  let ans = [];
  for (let [num, count] of counts) {
    if (count === n) ans.push(num);
  }

  ans.sort((a, b) => a - b);
  return ans;
};

// Time Complexity: O(n + m log m) where n is the total number of integers in all arrays
// and m is the number of integers that are present in each array of nums.
// The O(n) comes from iterating through all integers in all arrays to count their occurrences.
// The O(m log m) comes from sorting the resulting list of integers that are present in each array.
// Space Complexity: O(n) in the worst case when all integers are unique.
