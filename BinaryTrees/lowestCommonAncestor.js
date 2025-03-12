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

    //if root/current node is p or q return it, and
    //if root, lowest common ancestor must be root
    if (root == p || root == q) {
        return root;
    }

    //search left and right paths for p and q
    let leftPathSearch = lowestCommonAncestor(root.left, p, q);
    let rightPathSearch = lowestCommonAncestor(root.right, p, q);

    //if left and right search both do not return a null value,
    //root/current node is lowest common ancestor
    if (leftPathSearch && rightPathSearch) {
        return root;
    }

    //if left path returns non-null value, pass that value up
    if (leftPathSearch) {
        return leftPathSearch;
    }

    //passes up value from right path search, or null value if none is found,
    //indicating no p or q in this subtree if null
    return rightPathSearch;
}