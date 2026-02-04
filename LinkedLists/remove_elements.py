from typing import Optional
from LinkedLists.list_node import ListNode


class RemoveElements:
    def remove_elements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        sentinel = ListNode(0, head)
        current = head
        prev = sentinel
        while current:
            if current.val == val:
                prev.next = current.next
            else:
                prev = current
            current = current.next

        return sentinel.next

# Time Complexity: O(N)
# Space Complexity: O(1)