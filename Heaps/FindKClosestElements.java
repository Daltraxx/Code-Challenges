package Heaps;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.PriorityQueue;

public class FindKClosestElements {
    public List<Integer> findKClosestElements(int[] arr, int k, int x) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((n1, n2) -> {
            int n1Diff = Math.abs(x - n1);
            int n2Diff = Math.abs(x - n2);
            if (n1Diff == n2Diff) {
                return n2 - n1;
            }
            return n2Diff - n1Diff;
        });

        for (int num : arr) {
            maxHeap.add(num);
            if (maxHeap.size() > k) maxHeap.remove();
        }

        List<Integer> kClosestNums = new ArrayList<>();
        while (maxHeap.size() != 0) {
            kClosestNums.add(maxHeap.remove());
        }

        Collections.sort(kClosestNums);
        return kClosestNums;
    }
}
