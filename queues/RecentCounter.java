import java.util.ArrayDeque;
import java.util.Deque;

public class RecentCounter {
  Deque<Integer> queue;

  public RecentCounter() {
    this.queue = new ArrayDeque<>();
  }

  public int ping(int t) {
    queue.addLast(t);
    while (!queue.isEmpty() && queue.peekFirst() < t - 3000) {
      queue.removeFirst();
    }
    return queue.size();
  }
}

// Time complexity O(n) where n is the number of pings
// Space complexity O(n) in the worst case when all pings are within 3000