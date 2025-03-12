package BinaryTrees;

/*Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them. */

public class DiameterOfBinaryTree {
    public int diameter;

    public int diameterOfBinaryTree(TreeNode root) {
        diameter = 0;
        longestPath(root);
        return diameter;
    }

    public int longestPath(TreeNode node) {
        //if node is empty, return 0 (nothing to contribute to path count)
        if (node == null) {
            return 0;
        }

        //get count of longest paths found through left and right children
        int leftPath = longestPath(node.left);
        int rightPath = longestPath(node.right);

        //offer diameter found in current tree/subtree as possible solution
        diameter = Math.max(diameter, leftPath + rightPath);

        //return count of longest path found through current node
        return Math.max(leftPath, rightPath) + 1;
    }
}
