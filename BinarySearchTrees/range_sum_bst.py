from typing import Optional

from BinaryTrees.tree_node import TreeNode


class RangeSumBST:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        if not root:
            return 0

        curr_sum = root.val if low <= root.val <= high else 0

        if root.val > low:
            curr_sum += self.rangeSumBST(root.left, low, high)
        if root.val < high:
            curr_sum += self.rangeSumBST(root.right, low, high)

        return curr_sum

# Time Complexity: O(n) where n is the number of nodes in the tree, 
# as we may visit each node once in the case of a tree where all nodes are within the range.
# Space Complexity: O(h) where h is the height of the tree, which in the
# worst case (a skewed tree) is O(n) and in the best case (a balanced tree) is O(log n).