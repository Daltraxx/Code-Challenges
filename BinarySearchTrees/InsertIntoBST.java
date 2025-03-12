package BinarySearchTrees;

/*You are given the root node of a binary search tree (BST) and a value to insert into the tree. 
Return the root node of the BST after the insertion. 
It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, 
as long as the tree remains a BST after insertion. You can return any of them. */

class InsertIntoBST {
    public TreeNode insertIntoBST(TreeNode root, int val) {
        if (root == null) {
            return new TreeNode(val);
        }

        TreeNode currentNode = root;

        while (true) {
            if (val < currentNode.val) {
                if (currentNode.left == null) {
                    currentNode.left = new TreeNode(val);
                    return root;
                }
                    
                currentNode = currentNode.left;
                
            } else {
                if (currentNode.right == null) {
                    currentNode.right = new TreeNode(val);
                    return root;
                }

                currentNode = currentNode.right;
            }
        }
    }

    //recursive solution below
    public TreeNode insertIntoBSTRecursive(TreeNode root, int val) {
        if (root == null) {
            return new TreeNode(val);
        }

        if (val < root.val) {
            root.left = insertIntoBSTRecursive(root.left, val);
        } else {
            root.right = insertIntoBSTRecursive(root.right, val);
        }

        return root;
    }
}

