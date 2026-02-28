package BinarySearchTrees;

/*Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees. */

public class IsValidBST {
    public boolean isValidBST(TreeNode root) {
        return dfs(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    public boolean dfs(TreeNode node, long lowerBound, long higherBound) {
        // If null node is reached, path to that point has been valid
        if (node == null) {
            return true;
        }

        // Return false if node value does not meet BST requirements
        if (node.val <= lowerBound || node.val >= higherBound) {
            return false;
        }

        // Subtrees of left and right children must be valid
        return dfs(node.left, lowerBound, node.val) && dfs(node.right, node.val, higherBound);
    }
}

// Time Complexity: O(n) where n is the number of nodes in the tree, as we visit
// each node once.
// Space Complexity: O(h) where h is the height of the tree, which in the
// worst case (a skewed tree) is O(n) and in the best case (a balanced tree) is
// O(log n).
