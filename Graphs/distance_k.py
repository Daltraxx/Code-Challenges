from collections import deque
from typing import List

from BinaryTrees.tree_node import TreeNode


class DistanceK:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        # Find target and assign parent pointers
        queue = deque([root])
        while queue:
            current = queue.popleft()
            if current == target:
                break

            if current.left:
                current.left.parent = current
                queue.append(current.left)
            if current.right:
                current.right.parent = current
                queue.append(current.right)

        # Use BFS with target as origin
        queue = deque([target])
        seen = set([target])
        while queue and k > 0:
            level_size = len(queue)
            for _ in range(level_size):
                current = queue.popleft()
                if current.left and current.left not in seen:
                    seen.add(current.left)
                    queue.append(current.left)
                if current.right and current.right not in seen:
                    seen.add(current.right)
                    queue.append(current.right)
                if hasattr(current, "parent") and current.parent not in seen:
                    seen.add(current.parent)
                    queue.append(current.parent)
            k -= 1

        return [node.val for node in queue]

