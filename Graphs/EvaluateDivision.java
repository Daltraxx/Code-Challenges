import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Stack;

/*You are given an array of variable pairs equations and an array of real numbers values, 
where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. 
Each Ai or Bi is a string that represents a single variable.

You are also given some queries, 
where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

Return the answers to all queries. 
If a single answer cannot be determined, return -1.0.

Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them. */

class Pair {
    String node;
    double ratio;
    Pair (String node, double ratio) {
        this.node = node;
        this.ratio = ratio;
    }
}

public class EvaluateDivision {
    Map <String, Map<String, Double>> graph = new HashMap<>();

    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
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
            answers[i] = answerQuery(query.get(0), query.get(1));
        }

        return answers;
    }

    public double answerQuery(String start, String end) {
        //node/variable is undefined
        if (!graph.containsKey(start) || !graph.containsKey(end)) {
            return -1;
        }

        Set<String> seen = new HashSet<>();
        seen.add(start);

        Stack<Pair> stack = new Stack<>();
        stack.push(new Pair(start, 1));

        while (!stack.isEmpty()) {
            Pair pair = stack.pop();
            String node = pair.node;
            Double ratio = pair.ratio;

            if (node.equals(end)) {
                return ratio;
            }

            
            for (String neighbor : graph.get(node).keySet()) {
                if (!seen.contains(neighbor)) {
                    seen.add(neighbor);
                    double updatedRatio = ratio * graph.get(node).get(neighbor);
                    stack.push(new Pair(neighbor, updatedRatio));
                }
            }
            
        }

        return -1;
    }
}
