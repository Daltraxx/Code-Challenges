package BinaryTrees;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

/*Given the root of a binary tree, 
return an array of the largest value in each row of the tree (0-indexed). */

class LargestValues {
    public List<Integer> largestValuesBFS(TreeNode root) {
        List<Integer> largestRowValues = new ArrayList<>();

        if (root == null) {
            return largestRowValues;
        }

        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.addFirst(root);

        while (!queue.isEmpty()) {
            int size = queue.size();
            int maxRowValue = Integer.MIN_VALUE;

            for (int i = 0; i < size; i++) {
                TreeNode currentNode = queue.removeFirst();
                maxRowValue = Math.max(maxRowValue, currentNode.val);

                if (currentNode.left != null)
                    queue.addLast(currentNode.left);
                if (currentNode.right != null)
                    queue.addLast(currentNode.right);
            }

            largestRowValues.add(maxRowValue);
        }

        return largestRowValues;
    }
}

// Time Complexity: O(n) where n is the number of nodes in the tree,
// as we visit each node once.
// Space Complexity: O(w) where w is the maximum width of the tree,
// which is the maximum number of nodes at any level.
// In the worst case (a complete binary tree), the width would be O(n/2) = O(n).
// In the best case of a skewed tree, the width would be O(1), leading to O(1)
// space complexity.