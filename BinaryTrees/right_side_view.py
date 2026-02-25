from collections import deque
from typing import List, Optional

from tree_node import TreeNode


class RightSideView:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        right_nodes = []

        if not root:
            return right_nodes

        queue = deque([root])

        while queue:
            level_size = len(queue)
            for i in range(level_size):
                node = queue.popleft()
                if i == level_size - 1:
                    right_nodes.append(node.val)

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

        return right_nodes

# Time Complexity: O(n) where n is the number of nodes in the tree, as we visit each node once.
# Space Complexity: O(w) where w is the maximum width of the tree, 
# which in the worst case (a complete binary tree) is O(n/2) = O(n). 
# In the best case of a skewed tree, the width would be O(1), leading to O(1) space complexity.