import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). 
Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

It's guaranteed that each city can reach city 0 after reorder. */

public class MinReorder {
    boolean[] seen;
    Map<Integer, List<int[]>> graph;

    public int minReorder(int n, int[][] connections) {
        graph = new HashMap<>();

        // Build graph and with each edge store signifier if part of original directed edge
        for (int[] edge : connections) {
            graph.computeIfAbsent(edge[0], k -> new ArrayList<>()).add(new int[] { edge[1], 1 });
            graph.computeIfAbsent(edge[1], k -> new ArrayList<>()).add(new int[] { edge[0], 0 });
        }
        seen = new boolean[n];

        return getRouteFlips(0);
    }

    public int getRouteFlips(int startingCity) {
        Deque<Integer> stack = new ArrayDeque<>();
        seen[startingCity] = true;
        stack.addLast(startingCity);

        int routeFlips = 0;

        while (!stack.isEmpty()) {
            int city = stack.removeLast();
            for (int[] edge : graph.get(city)) {
                int neighbor = edge[0];
                boolean isOriginalRoute = edge[1] == 1;
                if (!seen[neighbor]) {
                    if (isOriginalRoute) {
                        routeFlips++;
                    }

                    seen[neighbor] = true;
                    stack.addLast(neighbor);
                }
            }
        }
        return routeFlips;
    }
}

// Time complexity: O(n) where n is the number of cities. 
// We visit each city once and each edge once (we're guaranteed to have n - 1 edges).
// Space complexity: O(n) for the graph and the seen array.
