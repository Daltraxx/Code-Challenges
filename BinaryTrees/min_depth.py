from collections import deque
from typing import Optional

from tree_node import TreeNode


class MinDepth:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        queue = deque([root])
        depth = 1

        while queue:
            level_size = len(queue)
            for _ in range(level_size):
                node = queue.popleft()
                if not node.left and not node.right:
                    return depth

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            depth += 1

        # This return statement is technically unreachable 
        # because we will always return from within the loop when we find a leaf node.
        return depth


# Time Complexity: O(n) where n is the number of nodes in the tree.
# In the worst case, we might have to visit all nodes of the tree to find the minimum depth.
# Space Complexity: O(w) where w is the maximum width of the tree.
