package Heaps;

import java.util.HashSet;
import java.util.PriorityQueue;
import java.util.Set;

public class SmallestInfiniteSet {
  int smallest;
  PriorityQueue<Integer> addedBack;
  Set<Integer> inAddedBack;

  public SmallestInfiniteSet() {
    smallest = 1;
    addedBack = new PriorityQueue<>();
    inAddedBack = new HashSet<>();
  }

  // Space Complexity: O(n) for the priority queue and hash set,
  // where n is the number of elements in the addedBack min heap.

  public int popSmallest() {
    if (addedBack.isEmpty()) {
      int currSmallest = smallest;
      smallest += 1;
      return currSmallest;
    } else {
      int currSmallest = addedBack.poll();
      inAddedBack.remove(currSmallest);
      return currSmallest;
    }
  }
  // Time Complexity: O(log n) for the priority queue operations,
  // where n is the number of elements in the addedBack min heap.

  public void addBack(int num) {
    if (num < smallest && !inAddedBack.contains(num)) {
      addedBack.offer(num);
      inAddedBack.add(num);
    }
  }

  // Time Complexity: O(log n) for the priority queue insertion,
  // where n is the number of elements in the addedBack min heap.
}
