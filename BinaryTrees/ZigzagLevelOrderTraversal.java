package BinaryTrees;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

/*Given the root of a binary tree, 
return the zigzag level order traversal of its nodes' values. 
(i.e., from left to right, then right to left for the next level and alternate between). */

class ZigzagLevelOrderTraversal {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> traversalOrder = new ArrayList<>();
        if (root == null) {
            return traversalOrder;
        }

        int direction = 0;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            int levelLength = queue.size();
            LinkedList<Integer> levelOrder = new LinkedList<>();

            for (int i = 0; i < levelLength; i++) {
                TreeNode node = queue.remove();

                if (direction % 2 == 0) { //left to right
                    levelOrder.addLast(node.val);
                } else { //right to left
                    levelOrder.addFirst(node.val);
                }
                
                if (node.left != null) queue.add(node.left);
                if (node.right != null) queue.add(node.right);
            }

            traversalOrder.add(levelOrder);
            direction++;
        }

        return traversalOrder;
    }
}