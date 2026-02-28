from typing import Optional

from BinaryTrees.tree_node import TreeNode


class InsertIntoBST:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if not root:
            return TreeNode(val)

        def dfs(node: TreeNode) -> None:
            if val < node.val:
                if not node.left:
                    node.left = TreeNode(val)
                else:
                    dfs(node.left)
            else:
                if not node.right:
                    node.right = TreeNode(val)
                else:
                    dfs(node.right)

        dfs(root)
        return root
