package Heaps;

import java.util.Comparator;
import java.util.PriorityQueue;

public class minOperationsToHalveArraySum {
    public int halveArray(int[] nums) {
        PriorityQueue<Double> heap = new PriorityQueue<>(Comparator.reverseOrder());
        double total = 0;
        for (double num : nums) {
            total += num;
            heap.add(num);
        }

        total /= 2;
        int operations = 0;

        while (total > 0) {
            operations++;
            double halfOfLargest = heap.remove() * .5;
            total -= halfOfLargest;
            heap.add(halfOfLargest);
        }

        return operations;
    }
}
