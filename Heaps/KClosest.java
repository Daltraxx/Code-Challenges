package Heaps;

import java.util.PriorityQueue;

public class KClosest {
    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> Integer.compare(b[0], a[0]));

        for (int[] point : points) {
            int x = point[0];
            int y = point[1];
            int distance = x * x + y * y;
            int[] pointWithDistance = new int[] { distance, x, y };
            maxHeap.offer(pointWithDistance);
            if (maxHeap.size() > k)
                maxHeap.poll();
        }

        int[][] closestPoints = new int[k][2];
        for (int i = 0; i < k; i++) {
            int[] pointWithDistance = maxHeap.poll();
            closestPoints[i] = new int[] { pointWithDistance[1], pointWithDistance[2] };
        }

        return closestPoints;
    }
}

// Time complexity: O(n log k) where n is the number of points and k is the
// number of closest points we want to find. We iterate through all n points,
// and for each point, we perform a heap operation that takes O(log k) time.
// Space complexity: O(k) for the max heap, as we store at most k points in the
// heap at any time.