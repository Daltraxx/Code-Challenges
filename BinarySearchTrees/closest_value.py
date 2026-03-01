from typing import Optional

from BinaryTrees.tree_node import TreeNode


class ClosestValue:
    def closestValue(self, root: Optional[TreeNode], target: float) -> int:
        closest_val = root.val
        current = root
        while current:
            prev_diff = abs(target - closest_val)
            current_diff = abs(target - current.val)
            if current_diff < prev_diff or (
                current_diff == prev_diff and current.val < closest_val
            ):
                closest_val = current.val
            if target < current.val:
                current = current.left
            else:
                current = current.right

        return closest_val


# Time Complexity: O(h) where h is the height of the tree. In the worst case of a skewed tree, the height could be O(n), or O(log n) in the best case of a balanced tree.
# Space Complexity: O(1) as we are using an iterative approach without recursion.
