package BinaryTrees;

/*Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

The lowest common ancestor is defined between two nodes p and q as the lowest node in T 
that has both p and q as descendants (where we allow a node to be a descendant of itself). */

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

 class LowestCommonAncestor {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        //if subtree empty, p and q not found in that path
        if (root == null) {
            return null;
        }

        //if root/current node is p or q,
        //pass information up (could be the LCA or info will be used to determine LCA)
        if (root == p || root == q) {
            return root;
        }

        //search left and right paths for p and q
        TreeNode searchLeftDescendant = lowestCommonAncestor(root.left, p, q);
        TreeNode searchRightDescendant = lowestCommonAncestor(root.right, p, q);

        //if p and q found on both sides of root/current node, found LCA
        if (searchLeftDescendant != null && searchRightDescendant != null) {
            return root;
        }

        //if p or q found only on left side, pass info up to help determine LCA
        if (searchLeftDescendant != null) {
            return searchLeftDescendant;
        }

        //can be node or null value, either used to help determine LCA
        return searchRightDescendant; 
    }
 }