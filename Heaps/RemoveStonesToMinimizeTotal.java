package Heaps;

import java.util.Comparator;
import java.util.PriorityQueue;

public class RemoveStonesToMinimizeTotal {
    public int minStoneSum(int[] piles, int k) {
        int total = 0;
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
        for (int pile : piles) {
            total += pile;
            maxHeap.add(pile);
        }

        for (int i = 0; i < k; i++) {
            int maxPile = maxHeap.remove();
            int stonesRemoved = maxPile / 2;
            total -= stonesRemoved;
            maxHeap.add(maxPile - stonesRemoved);
        }
        
        return total;
    }
}
