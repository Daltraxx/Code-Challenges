import java.util.HashMap;
import java.util.Map;

/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numToIndexMap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            int complement = target - num;

            if (numToIndexMap.containsKey(complement)) {
                return new int[] { numToIndexMap.get(complement), i };
            }

            numToIndexMap.put(num, i);
        }

        // Return empty array if no answer found
        return new int[] {};
    }
}

// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(n) - In the worst case,
// we store all n elements in the hashmap.