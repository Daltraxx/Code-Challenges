package BinaryTrees;

import java.util.ArrayDeque;
import java.util.Deque;

/*Given the root of a binary tree, return the sum of values of its deepest leaves. */

public class DeepestLeavesSum {
    public int deepestLeavesSum(TreeNode root) {
        int deepestLevelSum = 0;

        if (root == null) {
            return deepestLevelSum;
        }

        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.addLast(root);

        while (!queue.isEmpty()) {
            deepestLevelSum = 0;
            int levelSize = queue.size();

            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.removeFirst();
                deepestLevelSum += node.val;

                if (node.left != null)
                    queue.addLast(node.left);
                if (node.right != null)
                    queue.addLast(node.right);
            }
        }

        return deepestLevelSum;
    }
}

// Time Complexity: O(n) where n is the number of nodes in the tree,
// as we visit each node once.
// Space Complexity: O(w) where w is the maximum width of the tree,
// which is the maximum number of nodes at any level.
// In the worst case (a complete binary tree), the width would be O(n/2) = O(n).
// In the best case of a skewed tree, the width would be O(1), leading to O(1)
// space complexity.
