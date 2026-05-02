from collections import defaultdict
from typing import List, Optional

from BinaryTrees.tree_node import TreeNode


class PathSum:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        def dfs(node: Optional[TreeNode], prev_vals: List[int]) -> int:
            if not node:
                return 0

            count = 0 if node.val != targetSum else 1
            curr_sum = node.val
            for i in range(len(prev_vals) -1, -1, -1):
                val = prev_vals[i]
                curr_sum += val
                if curr_sum == targetSum:
                    count += 1
            prev_vals.append(node.val)
            count += dfs(node.left, prev_vals)
            count += dfs(node.right, prev_vals)
            prev_vals.pop()
            return count

        return dfs(root, [])

    def pathSumOptimized(self, root: Optional[TreeNode], targetSum: int) -> int:
        def dfs(node: Optional[TreeNode], sum_map: dict[int, int], curr_sum) -> int:
            if not node:
                return 0

            count = 0
            curr_sum += node.val
            count += sum_map[curr_sum - targetSum]
            sum_map[curr_sum] += 1
            count += dfs(node.left, sum_map, curr_sum)
            count += dfs(node.right, sum_map, curr_sum)
            sum_map[curr_sum] -= 1
            return count

        sum_map = defaultdict(int)
        sum_map[0] = 1
        return dfs(root, sum_map, 0)
