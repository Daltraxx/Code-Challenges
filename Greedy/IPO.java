import java.util.PriorityQueue;

public class IPO {
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>((a, b) -> { 
            return profits[a] - profits[b];
        });
    }
}