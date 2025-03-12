
/*Given an integer array nums and an integer k, 
there is a sliding window of size k that moves from the very left to the very right. 
For each window, find the maximum element in the window.

For example, given nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3, return [3, 3, 5, 5, 6, 7].*/

import java.util.ArrayDeque;
import java.util.Arrays;

/**
 * SlidingWindowMaximum
 */
public class SlidingWindowMaximum {
    public static int[] maxSlidingWindow(int[] nums, int k) {
        int[] answer = new int[nums.length - k + 1];
        ArrayDeque<Integer> queue = new ArrayDeque<>();

        for (int i = 0; i < nums.length; i++) {
            //maintain monotonic decreasing deque and
            //remove all elements in deque smaller than current one (no chance of being maximum)
            while(!queue.isEmpty() && nums[i] > nums[queue.getLast()]) {
                queue.removeLast();
            }

            queue.addLast(i);

            //queue[0] is index of maximum element
            //check if outside window, and remove if so
            if (queue.getFirst() + k == i) {
                queue.removeFirst();
            }

            //add to answer once window is size k
            if (i >= k - 1) {
                answer[i - k + 1] = nums[queue.getFirst()];
            }
        }

        return answer;
    }

    public static void main(String[] args) {
        int[] nums = {1, 3, -1, -3, 5, 3, 6, 7}; int k = 3;
        System.out.println(Arrays.toString(SlidingWindowMaximum.maxSlidingWindow(nums, k)));
    }
    
}


