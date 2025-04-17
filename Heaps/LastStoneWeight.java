package Heaps;

import java.util.Comparator;
import java.util.PriorityQueue;

class LastStoneWeight {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> heap = new PriorityQueue<>(Comparator.reverseOrder());

        for (int stone : stones) heap.add(stone);
        
        while (heap.size() > 1) {
            int remainingStone = heap.remove() - heap.remove();
            if (remainingStone > 0) heap.add(remainingStone);
        }

        return heap.isEmpty() ? 0 : heap.peek();
    }
}

//Time O(nlogn) and space of O(n)