package LinkedLists;

public class ReverseEvenLengthGroups {
  public ListNode reverseEvenLengthGroups(ListNode head) {
    ListNode scout = head.next;
    ListNode leftConnection = head;
    int groupLength = 2;
    int groupCount = 0;
    while (scout != null) {
      groupCount++;
      if (groupCount == groupLength || scout.next == null) {
        if (groupCount % 2 == 0) {
          ListNode current = leftConnection.next;
          ListNode reversedTail = current;
          ListNode reversedHead = scout;
          ListNode prev = scout.next;
          leftConnection.next = reversedHead;
          for (int i = 0; i < groupCount; i++) {
            ListNode nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
          }
          leftConnection = reversedTail;
          scout = reversedTail;
        } else {
          leftConnection = scout;
        }
        groupCount = 0;
        groupLength++;
      }

      scout = scout.next;
    }

    return head;
  }
}

// Time Complexity: O(N) where N is the number of nodes in the linked list
// Space Complexity: O(1)