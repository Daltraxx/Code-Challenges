/*You are given an integer array nums. 
The range of a subarray of nums is the difference between the largest and smallest element in the subarray.

Return the sum of all subarray ranges of nums.

A subarray is a contiguous non-empty sequence of elements within an array. */

import java.util.Stack;

class SumOfSubarrayRanges {
    public long subArrayRanges(int[] nums) {
        Stack<Integer> stack = new Stack<>();
        long sumOfRanges = 0;

        //account for minimums
        for (int i = 0; i <= nums.length; i++) {
            while (!stack.isEmpty() && (i == nums.length || nums[i] <= nums[stack.peek()])) {
                int minIndex = stack.pop();
                int leftBound = stack.isEmpty() ? -1 : stack.peek();
                int rightBound = i;

                long subArrayCount = (minIndex - leftBound) * (rightBound - minIndex);
                sumOfRanges -= nums[minIndex] * subArrayCount;
            }

            if (i != nums.length) stack.push(i);
        }

        //account for maximums
        for (int i = 0; i <= nums.length; i++) {
            while (!stack.isEmpty() && (i == nums.length || nums[i] >= nums[stack.peek()])) {
                int minIndex = stack.pop();
                int leftBound = stack.isEmpty() ? -1 : stack.peek();
                int rightBound = i;

                long subArrayCount = (minIndex - leftBound) * (rightBound - minIndex);
                sumOfRanges += nums[minIndex] * subArrayCount;
            }

            stack.push(i);
        }


        return sumOfRanges;
    }
}