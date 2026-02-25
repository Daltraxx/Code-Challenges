package BinaryTrees;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

/*Given the root of a binary tree, 
imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom. */

public class RightSideView {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> viewableNodeVals = new ArrayList<>();

        if (root == null) {
            return viewableNodeVals;
        }

        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            int currentLevelLength = queue.size();
            viewableNodeVals.add(queue.getLast().val);
            for (int i = 0; i < currentLevelLength; i++) {
                TreeNode node = queue.removeFirst();
                if (node.left != null)
                    queue.addLast(node.left);
                if (node.right != null)
                    queue.addLast(node.right);
            }
        }

        return viewableNodeVals;
    }
}

// Time Complexity: O(n) where n is the number of nodes in the tree, as we visit
// each node once.
// Space Complexity: O(w) where w is the maximum width of the tree,
// which occurs when the tree is a complete binary tree.
// In the worst case, the width can be O(n/2) = O(n). In the best case of a
// skewed tree, the width would be O(1).