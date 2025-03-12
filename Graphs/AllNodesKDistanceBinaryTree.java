import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
 
/*Given the root of a binary tree, the value of a target node target, and an integer k, 
return an array of the values of all nodes that have a distance k from the target node.

You can return the answer in any order. */

class AllNodesKDistanceBinaryTree {
    HashMap<TreeNode, TreeNode> parents;
    Set<TreeNode> seen;
    int k;

    public List<Integer> distanceK(TreeNode root, TreeNode target, int k) {
        parents = new HashMap<>();
        seen = new HashSet<>();
        this.k = k;

        setParents(root, null);

        seen.add(target);
        return getNodesAtKDistance(target);
    }

    public void setParents(TreeNode node, TreeNode parent) {
        if (node == null) {
            return;
        }

        parents.put(node, parent);

        setParents(node.left, node);
        setParents(node.right, node);
    }

    public List<Integer> getNodesAtKDistance(TreeNode startingNode) {
        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.add(startingNode);

        while (k > 0 && !queue.isEmpty()) {
            int levelSize = queue.size();

            for (int i = 0; i < levelSize; i++) {
                TreeNode currentNode = queue.removeFirst();

                for (TreeNode neighbor : new TreeNode[] {currentNode.left, currentNode.right, parents.get(currentNode)}) {
                    if (neighbor != null && !seen.contains(neighbor)) {
                        seen.add(neighbor);
                        queue.add(neighbor);
                    }
                }
            }

            k--;
        }

        List<Integer> kDistanceNodes = new ArrayList<>();
        for (TreeNode node : queue) {
            kDistanceNodes.add(node.val);
        }

        return kDistanceNodes;
    }
}