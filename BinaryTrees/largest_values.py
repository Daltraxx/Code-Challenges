from collections import deque
from typing import List, Optional

from tree_node import TreeNode


class LargestValues:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        largest_vals = []

        if not root:
            return largest_vals

        queue = deque([root])

        while queue:
            level_size = len(queue)
            max_val = float("-inf")

            for _ in range(level_size):
                node = queue.popleft()
                max_val = max(node.val, max_val)

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            largest_vals.append(max_val)

        return largest_vals


# Time Complexity: O(n) where n is the number of nodes in the tree, 
# as we visit each node once.
# Space Complexity: O(w) where w is the maximum width of the tree, 
# which is the maximum number of nodes at any level.
# In the worst case (a complete binary tree), the width would be O(n/2) = O(n).
# In the best case of a skewed tree, the width would be O(1), leading to O(1) space complexity.
