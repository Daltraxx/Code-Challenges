from tree_node import TreeNode


class LowestCommonAncestor:
    def lowestCommonAncestor(
        self, root: TreeNode, p: TreeNode, q: TreeNode
    ) -> TreeNode:
        if not root:
            return None
        
        if root == p or root == q:
            return root
        
        node_in_left = self.lowestCommonAncestor(root.left, p, q)
        node_in_right = self.lowestCommonAncestor(root.right, p, q)

        if not node_in_left and not node_in_right:
            return None

        if node_in_left and node_in_right:
            return root
        
        return node_in_left if node_in_left else node_in_right
