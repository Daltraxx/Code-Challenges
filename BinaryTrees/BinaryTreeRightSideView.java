package BinaryTrees;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

/*Given the root of a binary tree, 
imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom. */

public class BinaryTreeRightSideView {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> viewableNodes = new ArrayList<>();

        if (root == null) {
            return viewableNodes;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            int currentLevelLength = queue.size();
            for (int i = 0; i < currentLevelLength; i++) {
                TreeNode node = queue.remove();

                //if last node in the current level, it is viewable
                if (i == currentLevelLength - 1) {
                    viewableNodes.add(node.val);
                }

                if (node.left != null) queue.add(node.left);
                if (node.right != null) queue.add(node.right);
            }
        }

        return viewableNodes;
    }
}
