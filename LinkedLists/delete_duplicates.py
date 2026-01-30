from typing import Optional
from list_node import ListNode


class DeleteDuplicates:
    def delete_duplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head
        while current and current.next:
            if current.val == current.next.val:
                current.next = current.next.next
            else:
                current = current.next

        return head


# Time Complexity: O(n)
# Space Complexity: O(1)
