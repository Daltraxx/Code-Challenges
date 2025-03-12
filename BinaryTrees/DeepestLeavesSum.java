package BinaryTrees;

import java.util.LinkedList;
import java.util.Queue;

/*Given the root of a binary tree, return the sum of values of its deepest leaves. */

public class DeepestLeavesSum {
    public int deepestLeavesSum(TreeNode root) {
        int deepestLevelSum = 0;

        if (root == null) {
            return deepestLevelSum;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            int currentLevelSum = 0;
            int levelSize = queue.size();

            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.remove();
                currentLevelSum += node.val;

                if (node.left != null) queue.add(node.left);
                if (node.right != null) queue.add(node.right);
            }

            deepestLevelSum = currentLevelSum;
        }

        return deepestLevelSum;
    }
}
