package Heaps;

import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

public class TopKFrequentElements {
    public int[] topKFrequent(int[] nums, int k) {
        if (k == nums.length) return nums;
        
        Map<Integer, Integer> counts = new HashMap<>();

        for (int num : nums) {
            counts.put(num, counts.getOrDefault(num, 0) + 1);
        }

        PriorityQueue<Integer> minHeap = new PriorityQueue<>((n1, n2) -> counts.get(n1) - counts.get(n2));
        for (int num : counts.keySet()) {
            minHeap.add(num);
            if (minHeap.size() > k) minHeap.remove();
        }

        int[] mostFrequentKNums = new int[k];
        for (int i = 0; i < k; i++) {
            mostFrequentKNums[i] = minHeap.remove();
        }

        return mostFrequentKNums;
    }
}
