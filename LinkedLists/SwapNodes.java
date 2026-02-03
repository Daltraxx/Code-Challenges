package LinkedLists;

public class SwapNodes {
  public ListNode swapNodes(ListNode head, int k) {
    // Get kth node from start of list
    ListNode rightNode = head;
    for (int i = 1; i < k; i++) {
      rightNode = rightNode.next;
    }

    ListNode kthNodeFromStart = rightNode;

    // Get kth node from end of list
    ListNode leftNode = head;
    while (rightNode != null && rightNode.next != null) {
      leftNode = leftNode.next;
      rightNode = rightNode.next;
    }

    // Swap values of the two nodes
    int kthValueFromEnd = leftNode.val;
    leftNode.val = kthNodeFromStart.val;
    kthNodeFromStart.val = kthValueFromEnd;

    return head;
  }
}

// Time Complexity: O(N) where N is the number of nodes in the linked list
// Space Complexity: O(1)