

import java.util.Stack;

/*Given an integer array nums, 
return the number of non-empty subarrays with the leftmost element of the subarray not larger than other elements in the subarray.

A subarray is a contiguous part of an array.

Constraints:
1 <= nums.length <= 5 * 104
0 <= nums[i] <= 105
*/

class NumberOfValidSubarrays {
    public int validSubarrays(int[] nums) {
        Stack<Integer> stack = new Stack<>();
        int ans = 0;

        for (int i = 0; i < nums.length; i++) {
            //pop while num is smaller than index at top of stack,
            //adding difference between current index and top index to answer
            while (!stack.isEmpty() && nums[i] < nums[stack.peek()]) {
                ans += i - stack.pop();
            }
            stack.push(i);
        }

        //for nums that do not have smaller num to right of them,
        //add difference of nums length and their index to answer and pop
        while (!stack.isEmpty()) {
            ans += nums.length - stack.pop();
        }

        return ans;
    }
}