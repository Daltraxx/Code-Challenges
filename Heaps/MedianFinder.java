package Heaps;

import java.util.Comparator;
import java.util.PriorityQueue;

public class MedianFinder {
    private PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder()); // stores smaller half
    private PriorityQueue<Integer> minHeap = new PriorityQueue<>(); // stores larger half

    public void addNum(int num) {
        maxHeap.add(num);
        minHeap.add(maxHeap.remove());
        if (minHeap.size() > maxHeap.size()) {
            maxHeap.add(minHeap.remove());
        }

    }

    public double findMedian() {
        if (maxHeap.size() > minHeap.size()) {
            return maxHeap.peek();
        }

        return (maxHeap.peek() + minHeap.peek()) / 2.0;
    }
}


// This algorithm allows us to have an O(1) time complexity for findMedian 
// and an  O(logn) time complexity for addNum, which makes it an incredibly fast algorithm,
// where n is the number of times addNum has been called so far. The space complexity is 
// O(n) to store the heaps.

