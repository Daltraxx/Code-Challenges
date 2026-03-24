package Heaps;

import java.util.Comparator;
import java.util.PriorityQueue;

public class MinStoneSum {
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

// Time complexity: O(n + k log n).
// We build a max heap from the input list of piles, which takes O(n) time.
// Then, we perform k iterations where we pop the maximum element from the heap
// and push the reduced pile back into the heap.
// Each pop and push operation takes O(log n) time, resulting in O(k log n) for
// k iterations.
// Space complexity: O(n). We use a max heap to store the piles, which requires
// O(n) space in the worst case.