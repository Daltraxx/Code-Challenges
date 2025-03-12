import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Stack;

/*You are given a list of bombs. 
The range of a bomb is defined as the area where its effect can be felt. 
This area is in the shape of a circle with the center as the location of the bomb.

The bombs are represented by a 0-indexed 2D integer array bombs where bombs[i] = [xi, yi, ri]. 
xi and yi denote the X-coordinate and Y-coordinate of the location of the ith bomb, 
whereas ri denotes the radius of its range.

You may choose to detonate a single bomb. When a bomb is detonated, it will detonate all bombs that lie in its range. 
These bombs will further detonate the bombs that lie in their ranges.

Given the list of bombs, 
return the maximum number of bombs that can be detonated if you are allowed to detonate only one bomb.*/

public class DetonateMaximumBombs {
    HashMap<Integer, List<Integer>> graph;
    int[][] bombs;

    public int maximumDetonation(int[][] bombs) {
        this.bombs = bombs;
        graph = new HashMap<>();

        for (int bomb = 0; bomb < bombs.length; bomb++) {
            graph.put(bomb, new ArrayList<>());
        }

        for (int bomb1 = 0; bomb1 < bombs.length; bomb1++) {
            for (int bomb2 = bomb1 + 1; bomb2 < bombs.length; bomb2++) {
                setEdges(bomb1, bomb2);
            }
        }

        int maxDetonations = 0;

        for (int bomb = 0; bomb < bombs.length; bomb++) {
            maxDetonations = Math.max(getDetonations(bomb), maxDetonations);
        }

        return maxDetonations;
    }

    public void setEdges(int bomb1, int bomb2) {
        int[] bomb1Data = bombs[bomb1], bomb2Data = bombs[bomb2];

        int x1 = bomb1Data[0], y1 = bomb1Data[1], radius1 = bomb1Data[2];
        int x2 = bomb2Data[0], y2 = bomb2Data[1], radius2 = bomb2Data[2];

        double distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

        if (radius1 >= distance) graph.get(bomb1).add(bomb2);
        if (radius2 >= distance) graph.get(bomb2).add(bomb1);
    }

    public int getDetonations(int bomb) {
        boolean[] seen = new boolean[bombs.length];
        seen[bomb] = true;

        Stack<Integer> stack = new Stack<>();
        stack.push(bomb);

        int detonations = 0;

        while (!stack.isEmpty()) {
            int currentBomb = stack.pop();
            detonations++;

            for (int neighbor : graph.get(currentBomb)) {
                if (!seen[neighbor]) {
                    seen[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }

        return detonations;
    }
}
