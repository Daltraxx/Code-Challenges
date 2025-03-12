import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Stack;

/*There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). 
Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

It's guaranteed that each city can reach city 0 after reorder. */

public class ReorderRoutes {
    boolean[] seen;
    Map<Integer, List<Integer>> graph;
    Set<String> originalRoutes;

    public int minReorder(int n, int[][] connections) {
        graph = new HashMap<>();
        originalRoutes = new HashSet<>();

        //build graph while treating edges as undirected..
        //and add original routes to set
        for (int[] edge : connections) {
            originalRoutes.add(convertToHash(edge[0], edge[1]));

            if (!graph.containsKey(edge[0])) graph.put(edge[0], new ArrayList<Integer>());
            if (!graph.containsKey(edge[1])) graph.put(edge[1], new ArrayList<Integer>());

            graph.get(edge[0]).add(edge[1]);
            graph.get(edge[1]).add(edge[0]);
        }

        seen = new boolean[n];
        seen[0] = true;

        return getRouteFlips(0);

    }

    public String convertToHash(int start, int end) {
        return String.format("%s, %s", start, end);
    }

    public int getRouteFlips(int startingPoint) {
        Stack<Integer> stack = new Stack<>();
        stack.push(startingPoint);

        int routeFlips = 0;

        while (!stack.isEmpty()) {
            int city = stack.pop();

            for (int neighbor : graph.get(city)) {
                if (!seen[neighbor]) {
                    seen[neighbor] = true;

                    if (originalRoutes.contains(convertToHash(city, neighbor))) {
                        routeFlips++;
                    }

                    stack.push(neighbor);
                }
            }
        }

        return routeFlips;
    }
}
