package LinkedLists;

public class IsPalindrome {
  public boolean isPalindrome(ListNode head) {
    // Find middle of list
    ListNode slow = head;
    ListNode fast = head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Reverse second half of list
    ListNode prev = null;
    while (slow != null) {
      ListNode nextNode = slow.next;
      slow.next = prev;
      prev = slow;
      slow = nextNode;
    }

    // Check for Palindrome
    ListNode left = head;
    ListNode right = prev;
    while (right != null) {
      if (left.val != right.val) {
        return false;
      }
      left = left.next;
      right = right.next;
    }

    return true;
  }
}

// Time Complexity: O(n) - We traverse the list a few times, but each traversal is O(n).
// Space Complexity: O(1) - We are reversing the list in place and using only a few pointers, so we are not using any additional space that grows with the input size.