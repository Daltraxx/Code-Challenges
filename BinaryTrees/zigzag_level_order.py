from collections import deque
from typing import List, Optional

from tree_node import TreeNode


class ZigzagLevelOrder:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        level_orders = []

        if not root:
            return level_orders

        current_deque = deque([root])
        left_to_right = True

        while current_deque:
            order = []
            next_deque = deque()
            level_size = len(current_deque)
            for _ in range(level_size):
                node = current_deque.popleft() if left_to_right else current_deque.pop()
                order.append(node.val)
                if left_to_right:
                    if node.left:
                        next_deque.append(node.left)
                    if node.right:
                        next_deque.append(node.right)
                else:
                    if node.right:
                        next_deque.appendleft(node.right)
                    if node.left:
                        next_deque.appendleft(node.left)

            level_orders.append(order)
            left_to_right = not left_to_right
            current_deque = next_deque

        return level_orders


# Time Complexity: O(n) where n is the number of nodes in the tree, as we visit each node once.
# Space Complexity: O(w) where w is the maximum width of the tree,
# which in the worst case (a complete binary tree) is O(n/2) = O(n).
# In the best case of a skewed tree, the width would be O(1), leading to O(1) space complexity.
