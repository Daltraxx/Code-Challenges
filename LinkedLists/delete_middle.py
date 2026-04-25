from typing import Optional

from list_node import ListNode


class DeleteMiddle:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head

        slow = head
        fast = head
        prev = None
        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next

        # slow now points to middle node
        if not prev:
            return None
        prev.next = slow.next
        return head

    # Time complexity: O(n) where n is the number of nodes in the linked list.
    # This is because we need to traverse the linked list to find the middle node.
    # Space complexity: O(1).
