/*Given a binary tree, 
find the lowest common ancestor (LCA) of two given nodes in the tree.

The lowest common ancestor is defined between two nodes p and q as the lowest node in T 
that has both p and q as descendants (where we allow a node to be a descendant of itself).*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const lowestCommonAncestor = (root, p, q) => {
    if (!root) {
        return null;
    }

    // If node is p or q, LCA cannot be lower than this node, so return this node
    if (root == p || root == q) {
        return root;
    }

    let leftPathSearch = lowestCommonAncestor(root.left, p, q);
    let rightPathSearch = lowestCommonAncestor(root.right, p, q);

    // If p and q are found in different subtrees of this node, this node is the LCA
    if (leftPathSearch && rightPathSearch) {
        return root;
    }

    // If both p and q are found in the left or right subtree, return the non-null result
    // If neither p nor q is found in either subtree, this will return null
    return leftPathSearch ? leftPathSearch : rightPathSearch;
}

// Time complexity: O(n) where n is the number of nodes in the tree
// Space complexity: O(n) in the worst case of a skewed tree, O(log n) in the best case of a balanced tree, or simply O(h) where h is the height of the tree due to the recursive call stack.