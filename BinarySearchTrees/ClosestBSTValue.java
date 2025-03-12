package BinarySearchTrees;

class ClosestBSTValue {
    public int closestValue(TreeNode root, double target) {
      int closestValue = root.val;
      TreeNode currentNode = root;
  
      while (currentNode != null) {
        double closestDifference = Math.abs(target - closestValue);
        double currentDifference = Math.abs(target - currentNode.val);
        
        if (currentDifference < closestDifference || (currentDifference == closestDifference && currentNode.val < closestValue)) {
            closestValue = currentNode.val;
        } 
        
        currentNode =  target < currentNode.val ? currentNode.left : currentNode.right;
      }

      return closestValue;
    }
  }
