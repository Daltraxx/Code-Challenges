import java.util.ArrayDeque;
import java.util.Deque;

public class MovingAverage {
  int size;
  Deque<Integer> queue;
  int sum;

  public MovingAverage(int size) {
    this.size = size;
    this.queue = new ArrayDeque<>();
    this.sum = 0;
  }

  public double next(int val) {
    sum += val;
    queue.addLast(val);
    if (queue.size() > size) {
      sum -= queue.removeFirst();
    }
    return (double) sum / queue.size();
  }
}

// Time complexity O(1) for each call to next()
// Space complexity O(size) where size is the maximum number of elements in the moving average window