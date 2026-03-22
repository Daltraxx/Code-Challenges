package Heaps;

import java.util.Comparator;
import java.util.PriorityQueue;

public class HalveArray {
    public int halveArray(int[] nums) {
        PriorityQueue<Double> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
        double total = 0;
        for (double num : nums) {
            total += num;
            maxHeap.add(num);
        }

        double target = total / 2;
        int operations = 0;

        while (total > target) {
            operations++;
            double halfOfLargest = maxHeap.poll() * 0.5;
            total -= halfOfLargest;
            maxHeap.add(halfOfLargest);
        }

        return operations;
    }
}

// Time complexity: O(n log n) for building the max heap and O(k log n) for k operations 
// (bounded by O(n log n) in the worst case),
// where k is the number of operations needed to reduce the sum by half.
// Space complexity: O(n) for the max heap.