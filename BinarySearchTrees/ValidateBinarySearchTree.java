package BinarySearchTrees;

/*Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees. */

public class ValidateBinarySearchTree {
    public boolean isValidBST(TreeNode root) {
        return dfs(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    public boolean dfs(TreeNode node, long lowerBound, long higherBound) {
        //if null node is reached, path to that point has been valid
        if (node == null) {
            return true;
        }

        //return false if node value does not meet BST requirements
        if (node.val <= lowerBound || node.val >= higherBound) {
            return false;
        }

        //subtrees to left and right must be valid
        return dfs(node.left, lowerBound, node.val) && dfs(node.right, node.val, higherBound);
    }
}
