package LinkedLists;

public class PairSum {
  public int pairsum(ListNode head) {
    // Find middle of List
    ListNode fast = head;
    ListNode slow = head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Reverse back half of list
    ListNode prev = null;
    while (slow != null) {
      ListNode next = slow.next;
      slow.next = prev;
      prev = slow;
      slow = next;
    }

    // Find max twin sum
    ListNode leftTwin = head;
    ListNode rightTwin = prev;
    int maxSum = Integer.MIN_VALUE;
    while (rightTwin != null) {
      maxSum = Math.max(leftTwin.val + rightTwin.val, maxSum);
      leftTwin = leftTwin.next;
      rightTwin = rightTwin.next;
    }

    return maxSum;
  }
}

// Time Complexity: O(N)
// Space Complexity: O(1)