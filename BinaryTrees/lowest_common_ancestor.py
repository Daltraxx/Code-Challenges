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

    # Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
    # Space complexity: O(n) in the worst case of a completely unbalanced tree, where the height of the tree is n.

    def lowestCommonAncestorFirstAttempt(
        self, root: TreeNode, p: TreeNode, q: TreeNode
    ) -> TreeNode:
        lca = {"node": root, "depth": 0}

        def dfs(node: TreeNode, depth: int):
            if not node:
                return 0

            nodes_found = 0
            if node.val == p.val or node.val == q.val:
                nodes_found += 1

            nodes_found_on_left = dfs(node.left, depth + 1)
            nodes_found_on_right = dfs(node.right, depth + 1)

            nodes_found += nodes_found_on_left + nodes_found_on_right

            if nodes_found == 2 and depth > lca["depth"]:
                print("node found")
                lca["node"] = node
                lca["depth"] = depth

            return nodes_found

        dfs(root, 0)
        return lca["node"]
