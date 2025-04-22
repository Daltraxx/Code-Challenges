package Heaps;

import java.util.PriorityQueue;

public class minCostToConnectSticks {
    public int connectSticks(int[] sticks) {
        int totalCost = 0;

        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int stick : sticks) minHeap.add(stick);

        while (minHeap.size() > 1) {
            int comboCost = minHeap.remove() + minHeap.remove();
            totalCost += comboCost;
            minHeap.add(comboCost);
        }

        return totalCost;
    }
}
