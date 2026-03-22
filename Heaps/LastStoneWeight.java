package Heaps;

import java.util.Comparator;
import java.util.PriorityQueue;

class LastStoneWeight {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());

        for (int stone : stones)
            maxHeap.add(stone);

        while (maxHeap.size() > 1) {
            int heaviest = maxHeap.poll();
            int secondHeaviest = maxHeap.poll();
            int remainingStone = heaviest - secondHeaviest;

            if (remainingStone > 0)
                maxHeap.add(remainingStone);
        }

        return maxHeap.isEmpty() ? 0 : maxHeap.peek();
    }
}

// Time Complexity: O(n log n) - Building the max heap takes O(n) and each of
// the n-1 iterations involves a poll and possibly an add operation,
// each of which takes O(log n).
// Space Complexity: O(n) - In the worst case, all stones could be added to the
// max heap, resulting in O(n) space usage.