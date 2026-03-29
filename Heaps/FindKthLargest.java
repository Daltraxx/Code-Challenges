package Heaps;

import java.util.PriorityQueue;

public class FindKthLargest {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.add(num);
            if (minHeap.size() > k)
                minHeap.remove();
        }

        return minHeap.peek();
    }
}

// Time Complexity: O(n log k) where n is the number of elements in the input
// array and k is the size of the heap. We add each element to the heap, which
// takes O(log k) time, and we do this for all n elements.
// Space Complexity: O(k) since we are maintaining a heap of size k.
