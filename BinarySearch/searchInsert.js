const searchInsert = (nums, target) => {
  let left = 0; right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

// Time complexity O(logn)
// Space complexity O(1)

const nums = [1, 3, 5, 6],
  target = 2;

console.log(searchInsert(nums, target));