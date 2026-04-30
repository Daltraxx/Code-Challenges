from typing import List, Optional

from tree_node import TreeNode


class LeafSimilar:
    def leafSimilarRecursive(
        self, root1: Optional[TreeNode], root2: Optional[TreeNode]
    ) -> bool:
        def get_leaf_values(root: Optional[TreeNode], vals: List[int]) -> List[int]:
            if not root:
                return vals

            get_leaf_values(root.left, vals)

            if not root.left and not root.right:
                vals.append(root.val)

            get_leaf_values(root.right, vals)

            return vals

        root1_vals = get_leaf_values(root1, [])
        root2_vals = get_leaf_values(root2, [])

        return root1_vals == root2_vals

    # Time complexity: O(n + m) where n and m are the number of nodes in root1 and root2 respectively,
    # since we need to traverse both trees to collect the leaf values.
    # Space complexity: O(n + m) in the worst case if both trees are completely unbalanced (like a linked list),
    # since the recursion stack could go as deep as the number of nodes in the tree.

    def leafSimilarIterative(
        self, root1: Optional[TreeNode], root2: Optional[TreeNode]
    ) -> bool:
        def get_leaf_values(root: Optional[TreeNode]) -> List[int]:
            vals = []
            if not root:
                return vals

            stack = [root]
            while stack:
                curr = stack.pop()
                if not curr.left and not curr.right:
                    vals.append(curr.val)
                if curr.right:
                    stack.append(curr.right)
                if curr.left:
                    stack.append(curr.left)

            return vals

        root1_vals = get_leaf_values(root1)
        root2_vals = get_leaf_values(root2)

        return root1_vals == root2_vals

    # Time complexity: O(n + m) where n and m are the number of nodes in root1 and root2 respectively,
    # since we need to traverse both trees to collect the leaf values.
    # Space complexity: O(n + m) in the worst case if both trees are completely unbalanced (like a linked list),
    # since the stack could grow as large as the number of nodes in the tree.
