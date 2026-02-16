/*The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.*/

const nextGreaterElement = (nums1, nums2) => {
  // Precompute the next greater element for each number in nums2 using a monotonic decreasing stack
  const nextGreaterElementMap = new Map();
  const stack = [];

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    while (stack.length > 0 && num > stack.at(-1)) {
      nextGreaterElementMap.set(stack.pop(), num);
    }

    stack.push(num);
  }

  // For any remaining numbers in the stack, there is no next greater element
  for (let num of stack) {
    nextGreaterElementMap.set(num, -1);
  }

  // Build the result for nums1 using the precomputed next greater elements
  const ans = [];
  for (let num of nums1) {
    ans.push(nextGreaterElementMap.get(num));
  }

  return ans;
};

const nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];

console.log(nextGreaterElement(nums1, nums2));
