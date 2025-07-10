import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

public class IPO {
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        int n = profits.length;
        int[][] projects = new int[n][2];
        for (int i = 0; i < n; i++) {
            projects[i] = new int[]{capital[i], profits[i]};
        }

        Arrays.sort(projects, (a, b) -> Integer.compare(a[0], b[0]));
        
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());

        int i = 0;
        for (int j = 0; j < k; j++) {
            while (i < n && projects[i][0] <= w) {
                maxHeap.add(projects[i][1]);
                i++;
            }

            if (maxHeap.isEmpty()) return w;

            w += maxHeap.remove();
        }

        return w;
    }
}

// This algorithm has a time complexity of O((k+n)⋅logn), where n is the number of projects given. 
// The heap's max size is n, which means its operations are logn in the worst case, and we do k + n operations (k pop operations, n push operations). 
// The sort at the start also costs O(n⋅logn), but this doesn't change the complexity. 
// The space complexity is O(n) due to the heap.