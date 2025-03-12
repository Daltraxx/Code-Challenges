/*The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.*/

const nextGreaterElement = (nums1, nums2) => {
    const nextGreaterElementMap = new Map();
    const stack = [];

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
            nextGreaterElementMap.set(stack.pop(), nums2[i]);
        }
        
        stack.push(nums2[i]);
    }

    for (let num of stack) {
        nextGreaterElementMap.set(num, -1);
    }

    const ans = [];
    for (let i = 0; i < nums1.length; i++) {
        ans[i] = nextGreaterElementMap.get(nums1[i]);
    }

    return ans;
}

const nums1 = [4,1,2], nums2 = [1,3,4,2];

console.log(nextGreaterElement(nums1, nums2));