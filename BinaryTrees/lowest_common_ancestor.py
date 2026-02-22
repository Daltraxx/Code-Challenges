from tree_node import TreeNode


class LowestCommonAncestor:
    def lowestCommonAncestor(
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
                lca["node"] = node
                lca["depth"] = depth

            return nodes_found

        dfs(root, 0)
        return lca["node"]
