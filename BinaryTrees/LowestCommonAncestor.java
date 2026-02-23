package BinaryTrees;

/*Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

The lowest common ancestor is defined between two nodes p and q as the lowest node in T 
that has both p and q as descendants (where we allow a node to be a descendant of itself). */

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode(int x) { val = x; }
 * }
 */

class LowestCommonAncestor {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // If root is null, p and q are not found in this path
        if (root == null) {
            return null;
        }

        // If root/current node is p or q, LCA cannot be lower than this node
        if (root == p || root == q) {
            return root;
        }

        TreeNode searchLeftDescendant = lowestCommonAncestor(root.left, p, q);
        TreeNode searchRightDescendant = lowestCommonAncestor(root.right, p, q);

        // If p and q are found in different subtrees of this node, this node is the LCA
        if (searchLeftDescendant != null && searchRightDescendant != null) {
            return root;
        }

        // If both p and q are found in the left or right subtree, return the non-null
        // result
        // If neither p nor q is found in either subtree, this will return null
        return searchLeftDescendant != null ? searchLeftDescendant : searchRightDescendant;
    }
}

// Time Complexity: O(N) where N is the number of nodes in the binary tree. In
// the worst case, we might have to visit all nodes of the tree.
// Space Complexity: O(N) in the worst case when the binary tree is skewed. In
// the best case (balanced tree), the space complexity would be O(log N) due to
// the recursive call stack. Could simply use O(h) where h is the height of the
// tree.