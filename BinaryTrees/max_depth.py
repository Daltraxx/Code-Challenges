from typing import Optional

from tree_node import TreeNode


class MaxDepth:
    def max_depth(self, root: Optional[TreeNode]) -> int:
        return self._dfs(root)_
      
    def _dfs(self, node: Optional[TreeNode]):
        if not node:
            return 0
        
        left_depth = 1 + self._dfs(node.left)
        right_depth = 1 + self._dfs(node.right)

        return max(left_depth, right_depth)
        
