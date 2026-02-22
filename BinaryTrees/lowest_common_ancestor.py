from tree_node import TreeNode


class LowestCommonAncestor:
    def lowestCommonAncestor(
        self, root: TreeNode, p: TreeNode, q: TreeNode
    ) -> TreeNode:
        if not root:
            return None
        
        # If the current node is p or q, answer cannot be lower than current node
        if root == p or root == q:
            return root
        
        node_in_left = self.lowestCommonAncestor(root.left, p, q)
        node_in_right = self.lowestCommonAncestor(root.right, p, q)

        # If p and q are found in different subtrees, then the current node is their lowest common ancestor
        if node_in_left and node_in_right:
            return root
        
        # If p and q are found in the same subtree, the node returned by that subtree is their lowest common ancestor
        # If neither subtree contains p or q, this will return None
        return node_in_left if node_in_left else node_in_right
