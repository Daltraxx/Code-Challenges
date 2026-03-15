import java.util.ArrayDeque;
import java.util.Deque;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class CalcEquation {
    Map<String, Map<String, Double>> graph;

    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        graph = new HashMap<>();
        for (int i = 0; i < equations.size(); i++) {
            String numerator = equations.get(i).get(0);
            String denominator = equations.get(i).get(1);
            double value = values[i];

            graph.computeIfAbsent(numerator, val -> new HashMap<>()).put(denominator, value);
            graph.computeIfAbsent(denominator, val -> new HashMap<>()).put(numerator, 1 / value);
        }

        double[] answers = new double[queries.size()];
        for (int i = 0; i < queries.size(); i++) {
            List<String> query = queries.get(i);
            answers[i] = dfs(query.get(0), query.get(1));
        }

        return answers;
    }

    public double dfs(String start, String end) {
        // Node/variable is undefined
        if (!graph.containsKey(start) || !graph.containsKey(end)) {
            return -1;
        }

        Set<String> seen = new HashSet<>();
        seen.add(start);

        Deque<Pair> stack = new ArrayDeque<>();
        stack.push(new Pair(start, 1));

        while (!stack.isEmpty()) {
            Pair pair = stack.pollLast();
            String node = pair.node;
            Double ratio = pair.ratio;

            if (node.equals(end)) {
                return ratio;
            }

            for (Map.Entry<String, Double> entry : graph.get(node).entrySet()) {
                String neighbor = entry.getKey();
                double weight = entry.getValue();
                if (!seen.contains(neighbor)) {
                    seen.add(neighbor);
                    double updatedRatio = ratio * weight;
                    stack.addLast(new Pair(neighbor, updatedRatio));
                }
            }

        }

        return -1;
    }

    private static class Pair {
        String node;
        double ratio;

        Pair(String node, double ratio) {
            this.node = node;
            this.ratio = ratio;
        }
    }
}

// Time complexity: O(Q * (V + E)) where Q is the number of queries, V is the
// number of variables and E is the number of equations
// Space complexity: O(V + E) for the graph and O(V) for the seen set and stack
// in the worst case.
