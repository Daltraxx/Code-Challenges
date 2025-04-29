package Heaps;

import java.util.PriorityQueue;

public class KClosestPointsToOrigin {
    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((pointA, pointB) -> {
            double distanceA = getDistance(pointA);
            double distanceB = getDistance(pointB);

            return distanceA > distanceB ? -1 : 1;
        });

        for (int[] point : points) {
            maxHeap.add(point);
            if (maxHeap.size() > k) maxHeap.remove();
        }

        int[][] closestPoints = new int[k][2];
        for (int i = 0; i < k; i++) {
            closestPoints[i] = maxHeap.remove();
        }

        return closestPoints;
    }

    public double getDistance(int[] point) {
        int x = point[0];
        int y = point[1];
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }
}
