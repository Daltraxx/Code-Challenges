
/*
 * The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
 * You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
 * For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
 * Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
 */

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;
import java.util.HashMap;

public class NextGreaterElementSolution {
    public static int[] nextGreaterElement(int[] nums1, int[] nums2) {
        // Precompute the next greater element for each number in nums2 using a monotonic decreasing stack
        Deque<Integer> monoDecreasingStack = new ArrayDeque<>();
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums2.length; i++) {
            int num = nums2[i];
            while (!monoDecreasingStack.isEmpty() && num > monoDecreasingStack.getLast()) {
                map.put(monoDecreasingStack.removeLast(), num);
            }
            monoDecreasingStack.addLast(num);
        }

        // For any remaining elements in the stack, there is no next greater element, so we map them to -1
        while (!monoDecreasingStack.isEmpty()) {
            map.put(monoDecreasingStack.removeLast(), -1);
        }
        
        // Build the result for nums1 using the precomputed next greater elements
        int[] ans = new int[nums1.length];
        for (int i = 0; i < nums1.length; i++) {
            ans[i] = map.get(nums1[i]);
        }

        return ans;
    }

    public static void main(String[] args) {
        int[] nums1 = {4,1,2}; int[] nums2 = {1,3,4,2};
        int[] solution = nextGreaterElement(nums1, nums2);
        System.out.println(Arrays.toString(solution));  
    }
}

// Time complexity: O(n + m) where n is the length of nums1 and m is the length of nums2
// Space complexity: O(m) where m is the length of nums2