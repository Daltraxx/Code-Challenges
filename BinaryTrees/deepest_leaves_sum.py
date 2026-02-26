from collections import deque
from typing import Optional

from tree_node import TreeNode


class DeepestLeavesSum:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        queue = deque([root])
        deepest_sum = 0

        while queue:
            deepest_sum = 0
            level_size = len(queue)
            for _ in range(level_size):
                node = queue.popleft()
                deepest_sum += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

        return deepest_sum


# Time Complexity: O(n) where n is the number of nodes in the tree, as we visit each node once.
# Space Complexity: O(w) where w is the maximum width of the tree,
# which in the worst case (a complete binary tree) is O(n/2) = O(n).
# In the best case of a skewed tree, the width would be O(1), leading to O(1) space complexity.
