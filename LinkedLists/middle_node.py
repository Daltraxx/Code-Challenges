from typing import Optional
from list_node import ListNode


class MiddleNode:
    def middle_node(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow

# Time Complexity: O(N)
# Space Complexity: O(1)