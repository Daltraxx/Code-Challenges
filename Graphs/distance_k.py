from collections import deque
from typing import List

from BinaryTrees.tree_node import TreeNode


class DistanceK:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        # Find target and assign parent pointers
        queue = deque([root])
        parents = {}
        while queue:
            current = queue.popleft()
            if current == target:
                break

            if current.left:
                parents[current.left] = current
                queue.append(current.left)
            if current.right:
                parents[current.right] = current
                queue.append(current.right)

        # Use BFS with target as origin
        queue = deque([target])
        seen = {target}
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
                if current in parents and parents[current] not in seen:
                    seen.add(parents[current])
                    queue.append(parents[current])
            k -= 1

        return [node.val for node in queue]


# Time Complexity: O(n) where n is the number of nodes in the tree,
# as we may need to visit each node once to find the target and assign parent pointers,
# and then visit nodes up to distance k from the target.
# Space Complexity: O(n) for the queue and seen set.
