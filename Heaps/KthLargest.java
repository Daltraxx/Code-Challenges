package Heaps;

import java.util.PriorityQueue;

public class KthLargest {
    int k;
    PriorityQueue<Integer> minHeap;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        this.minHeap = new PriorityQueue<>();

        for (int num : nums)
            this.add(num);
    }

    // Time complexity for initialization: O(n log k) where n is the length of the
    // input array nums,
    // as we need to insert each element into the heap and maintain its size at most
    // k.
    // Space complexity: O(k) for the heap, as we are maintaining at most k elements
    // in the heap.

    public int add(int val) {
        if (minHeap.size() < k) {
            minHeap.offer(val);
        } else if (val > minHeap.peek()) {
            minHeap.poll();
            minHeap.offer(val);
        }
        return minHeap.peek();
    }

    // Time complexity for add method: O(log k) in the worst case,
    // when we need to replace the smallest element in the heap.
    // Space complexity: O(1), as we are not using any additional space apart from
    // the heap.

}
