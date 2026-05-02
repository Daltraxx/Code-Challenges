from collections import defaultdict
from typing import List, Optional

from BinaryTrees.tree_node import TreeNode


class PathSum:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        def dfs(node: Optional[TreeNode], prev_vals: List[int]) -> int:
            if not node:
                return 0

            prev_vals.append(node.val)
            count = 0
            curr_sum = 0
            for i in range(len(prev_vals) - 1, -1, -1):
                val = prev_vals[i]
                curr_sum += val
                if curr_sum == targetSum:
                    count += 1

            count += dfs(node.left, prev_vals)
            count += dfs(node.right, prev_vals)
            prev_vals.pop()
            return count

        return dfs(root, [])
    
    # Time complexity: O(n^2) in the worst case 
    # (when the tree is a linked list), 
    # because for each node we have to traverse back up to the root 
    # to calculate the sum of the path.
    # Space complexity: O(n) in the worst case (when the tree is a linked list), 
    # because the recursion stack can go as deep as the number of nodes in the tree.

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
    
    # Time complexity: O(n) because we visit each node once 
    # and the operations we perform at each node 
    # (updating the sum_map and calculating the count) 
    # take O(1) time.
    # Space complexity: O(n) in the worst case (when the tree is a linked list), 
    # because the recursion stack can go as deep as the number of nodes in the tree, 
    # and the sum_map can also grow to contain up to n entries in the worst case.

