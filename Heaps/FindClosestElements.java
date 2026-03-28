package Heaps;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.PriorityQueue;

public class FindClosestElements {
    public List<Integer> findKClosestElementsHeap(int[] arr, int k, int x) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((n1, n2) -> {
            // We want to sort the heap based on the distance of the numbers from x, popping
            // numbers with larger distances first,
            // with a tie-breaking rule that favors keeping smaller numbers.
            int n1Diff = Math.abs(x - n1);
            int n2Diff = Math.abs(x - n2);
            if (n1Diff == n2Diff) {
                return n2 - n1;
            }
            return n2Diff - n1Diff;
        });

        for (int num : arr) {
            maxHeap.add(num);
            if (maxHeap.size() > k)
                maxHeap.remove();
        }

        List<Integer> kClosestNums = new ArrayList<>();
        while (maxHeap.size() != 0) {
            kClosestNums.add(maxHeap.remove());
        }

        Collections.sort(kClosestNums);
        return kClosestNums;
    }
    // Time Complexity: O(n log k) to build the heap and O(k log k) to sort the
    // result, leading to O(n log k + k log k) overall.
    // Space Complexity: O(k) for the heap and O(k) for the result list.
}
