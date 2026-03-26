package Heaps;

import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

public class TopKFrequent {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> counts = new HashMap<>();

        for (int num : nums) {
            counts.put(num, counts.getOrDefault(num, 0) + 1);
        }

        PriorityQueue<Integer> minHeap = new PriorityQueue<>(
                (n1, n2) -> Integer.compare(counts.get(n1), counts.get(n2)));
        for (int num : counts.keySet()) {
            minHeap.offer(num);
            if (minHeap.size() > k)
                minHeap.poll();
        }

        int[] mostFrequentKNums = new int[k];
        for (int i = 0; i < k; i++) {
            mostFrequentKNums[i] = minHeap.poll();
        }

        return mostFrequentKNums;
    }
}

// Time complexity: O(n log k) where n is the number of elements in the input
// array and k is the number of most frequent elements to return. We iterate
// through the input array once to count the frequency of each element, which
// takes O(n) time. Then, we iterate through the frequency map and add each
// element to the min-heap, which takes O(log k) time for each element. Finally,
// we poll the min-heap k times to get the most frequent elements, which takes
// O(k log k) time. Overall, the time complexity is O(n log k).
// Space complexity: O(n) for the frequency map and O(k) for the min-heap,
// resulting in O(n) overall.