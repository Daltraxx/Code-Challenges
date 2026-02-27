from collections import deque
from typing import List, Optional

from tree_node import TreeNode


class ZigzagLevelOrder:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        level_orders = []

        if not root:
            return level_orders

        queue = deque([root])
        left_to_right = True

        while queue:
            order = deque()
            level_size = len(queue)
            for _ in range(level_size):
                node = queue.popleft()
                if left_to_right:
                    order.append(node.val)
                else:
                    order.appendleft(node.val)

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            level_orders.append(list(order))
            left_to_right = not left_to_right

        return level_orders


# Time Complexity: O(n) where n is the number of nodes in the tree, as we visit each node once.
# Space Complexity: O(w) where w is the maximum width of the tree,
# which in the worst case (a complete binary tree) is O(n/2) = O(n).
# In the best case of a skewed tree, the width would be O(1), leading to O(1) space complexity.
