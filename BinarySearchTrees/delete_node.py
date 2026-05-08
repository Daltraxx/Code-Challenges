from typing import Optional

from BinaryTrees.tree_node import TreeNode


class DeleteNode:
    # Iterative solution using in-order successor and predecessor logic
    def deleteNode1(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
        def perform_delete(node_to_delete: Optional[TreeNode]) -> Optional[TreeNode]:
            curr = node_to_delete
            prev_node = node_to_delete
            if curr.right:
                # Find smallest val in right tree (in-order successor)
                curr = curr.right
                while curr.left:
                    prev_node = curr
                    curr = curr.left
                if prev_node != node_to_delete:
                    prev_node.left = curr.right
                    curr.left = node_to_delete.left
                    curr.right = node_to_delete.right
                else:
                    curr.left = node_to_delete.left
            elif curr.left:
                # Find largest value in left tree (in-order predecessor)
                curr = curr.left
                while curr.right:
                    prev_node = curr
                    curr = curr.right
                if prev_node != node_to_delete:
                    prev_node.right = curr.left
                    curr.left = node_to_delete.left
                    curr.right = node_to_delete.right
                else:
                    curr.right = node_to_delete.right
            else:
                # Node has no children
                curr = None
            return curr

        if not root:
            return root

        # Find the node to delete and its parent
        prev_node = None
        curr = root
        while curr and curr.val != key:
            prev_node = curr
            if key < curr.val:
                curr = curr.left
            else:
                curr = curr.right

        # If the node to delete is not found, return the original root
        if curr is None:
            return root

        # Perform the deletion and update the parent's pointer
        if curr is root:
            return perform_delete(root)
        elif prev_node.left is curr:
            prev_node.left = perform_delete(curr)
        else:
            prev_node.right = perform_delete(curr)
        return root

    # Time complexity: O(h) where h is the height of the tree,
    # since we may need to traverse from the root to the node to delete,
    # and then potentially find the in-order successor or predecessor.
    # In the worst case of a skewed tree, this can be O(n).
    # Space complexity: O(1).

    # Iterative solution using just in-order successor logic
    def deleteNode2(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
        def perform_delete(node_to_delete: Optional[TreeNode]) -> Optional[TreeNode]:
            curr = node_to_delete
            prev_node = node_to_delete
            if curr.right:
                # Find smallest val in right tree (in-order successor)
                curr = curr.right
                while curr.left:
                    prev_node = curr
                    curr = curr.left
                if prev_node != node_to_delete:
                    prev_node.left = curr.right
                    curr.left = node_to_delete.left
                    curr.right = node_to_delete.right
                else:
                    curr.left = node_to_delete.left
            else:
                # No right child, so we can replace with left child (which may be None)
                curr = node_to_delete.left
            
            return curr

        if not root:
            return root

        # Find the node to delete and its parent
        prev_node = None
        curr = root
        while curr and curr.val != key:
            prev_node = curr
            if key < curr.val:
                curr = curr.left
            else:
                curr = curr.right

        # If the node to delete is not found, return the original root
        if curr is None:
            return root

        # Perform the deletion and update the parent's pointer
        if curr is root:
            return perform_delete(root)
        elif prev_node.left is curr:
            prev_node.left = perform_delete(curr)
        else:
            prev_node.right = perform_delete(curr)
        return root

    # Same time and space complexity as deleteNode1 
    # though it may be more efficient in practice 
    # since it only uses the in-order successor logic.

    # Recursive solution using in-order successor logic
    def deleteNodeRecursive(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
        if not root:
            return None

        if key < root.val:
            root.left = self.deleteNodeRecursive(root.left, key)
        elif key > root.val:
            root.right = self.deleteNodeRecursive(root.right, key)
        else:
            if not root.right:
                return root.left
            if not root.left:
                return root.right
            curr = root.right
            while curr.left:
                curr = curr.left
            root.val = curr.val
            root.right = self.deleteNodeRecursive(root.right, curr.val)
        return root

    # Time complexity: O(h) where h is the height of the tree,
    # since we may need to traverse from the root to the node to delete,
    # and then potentially find the in-order successor.
    # In the worst case of a skewed tree, this can be O(n).
    # Space complexity: O(h) due to the recursion stack.
    # In the worst case of a skewed tree, this can be O(n).
