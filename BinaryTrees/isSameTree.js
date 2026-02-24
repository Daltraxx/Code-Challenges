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
  // If both trees are empty they're identical
  if (!p && !q) {
    return true;
  }

  // If one node is null and the other isn't, tree not identical
  if (!p || !q) {
    return false;
  }

  // Values must be equal
  if (p.val !== q.val) {
    return false;
  }

  // Both paths must be identical
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const isSameTreeIterative = (p, q) => {
  const stack = [[p, q]];

  while (stack.length) {
    const [nodeA, nodeB] = stack.pop();

    // If a null node is reached, path to that point has been identical
    if (!nodeA && !nodeB) {
      continue;
    }

    // If one node is null and the other isn't, tree not identical
    if (!nodeA || !nodeB) {
      return false;
    }

    // Values must be equal
    if (nodeA.val !== nodeB.val) {
      return false;
    }

    stack.push([nodeA.left, nodeB.left]);
    stack.push([nodeA.right, nodeB.right]);
  }

  return true;
};

// Time Complexity: O(n) where n is the number of nodes in the smaller tree, 
// since we have to check every node in both trees until we find a mismatch or reach the end of both trees.
// Space Complexity: O(h) where h is the height of the tree, since in the worst case (a completely unbalanced tree) 
// the stack could hold all nodes in one path from root to leaf. In a balanced tree, this would be O(log n).
