package Heaps;

import java.util.PriorityQueue;

public class KthLargest {
    int k;
    PriorityQueue<Integer> minHeap;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        this.minHeap = createHeap(nums);
    }

    public int add(int val) {
        this.minHeap.add(val);
        if (this.minHeap.size() > k) this.minHeap.remove();
        return this.minHeap.peek();
    }

    private PriorityQueue<Integer> createHeap(int[] nums) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.add(num);
            if (minHeap.size() > this.k) minHeap.remove();
        }

        return minHeap;
    }
}
