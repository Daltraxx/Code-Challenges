from typing import Optional

from tree_node import TreeNode


class MaxDepth:
    def max_depth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        return 1 + max(self.max_depth(root.left), self.max_depth(root.right))


    # Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
    # Space complexity: O(h) where h is the height of the binary tree. 
    # In the worst case of a completely unbalanced tree, the height could be n, leading to O(n) space complexity. 
    # In the best case of a balanced tree, the height would be log(n), leading to O(log(n)) space complexity.

    def max_depth_iterative(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        stack = [(root, 1)]
        max_depth = 0
        while stack:
            node, depth = stack.pop()
            max_depth = max(max_depth, depth)
            if node.left:
                stack.append((node.left, depth + 1))
            if node.right:
                stack.append((node.right, depth + 1))

        return max_depth

    # Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
    # Space complexity: O(h) where h is the height of the binary tree. 
    # In the worst case of a completely unbalanced tree, the height could be n, leading to O(n) space complexity. 
    # In the best case of a balanced tree, the height would be log(n), leading to O(log(n)) space complexity.
