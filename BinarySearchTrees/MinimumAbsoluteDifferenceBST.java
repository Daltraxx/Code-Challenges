package BinarySearchTrees;

/*Given the root of a Binary Search Tree (BST), 
return the minimum absolute difference between the values of any two different nodes in the tree. */

public class MinimumAbsoluteDifferenceBST {
    TreeNode prevNode;
    int minimumDifference = Integer.MAX_VALUE;

    public int getMinimumDifference(TreeNode root) {
        dfs(root);
        return minimumDifference;
    }

    public void dfs(TreeNode node) {
        if (node == null) {
            return;
        }

        //use in-order processing for sorted traversal
        dfs(node.left);

        if (prevNode != null) minimumDifference = Math.min(node.val - prevNode.val, minimumDifference);
        prevNode = node;

        dfs(node.right);
        
        return;
    }
}
