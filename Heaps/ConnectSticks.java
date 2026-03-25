package Heaps;

import java.util.PriorityQueue;

public class ConnectSticks {
    public int connectSticks(int[] sticks) {
        int totalCost = 0;

        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int stick : sticks)
            minHeap.offer(stick);

        // Alternative way to build the min-heap using Java Streams with O(n) time
        // complexity but more overhead:
        // PriorityQueue<Integer> minHeap = new PriorityQueue<>(Arrays.stream(sticks).boxed().toList());

        while (minHeap.size() > 1) {
            int comboCost = minHeap.remove() + minHeap.remove();
            totalCost += comboCost;
            minHeap.add(comboCost);
        }

        return totalCost;
    }
}

// Time complexity: O(n log n). Building the min-heap takes O(n log n) time,
// and we perform n - 1 iterations of the loop,
// where each iteration involves popping two elements
// and pushing one element back into the heap in O(log n) time.