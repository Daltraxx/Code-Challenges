/*Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value. */

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

const isSameTree = (p, q) => {
    //if both trees are empty they're identical,
    //and if a null child is reached, path to that point has been identical
    if (!p && !q) {
        return true;
    }

    //combined with previous check,
    //if one node is null and the other isn't,
    //tree not identical
    if (!p || !q) {
        return false;
    }

    //values must be equal
    if (p.val !== q.val) {
        return false;
    }

    //both paths must be identical
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const isSameTreeIterative = (p, q) => {
    const stack = [[p, q]];

    while (stack.length) {
        const [nodeA, nodeB] = stack.pop();

        //if a null node is reached, path to that point has been identical
        if (!nodeA && !nodeB) {
            continue;
        }

        //combined with previous check,
        //if one node is null and the other isn't,
        //tree not identical
        if (!nodeA || !nodeB) {
            return false;
        }

        //values must be equal
        if (nodeA.val !== nodeB.val) {
            return false;
        }

        stack.push([nodeA.left, nodeB.left]);
        stack.push([nodeA.right, nodeB.right]);
    }

    return true;
}