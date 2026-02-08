from typing import Optional

from list_node import ListNode


class IsPalindrome:
    def is_palindrome(head: Optional[ListNode]) -> bool:
        # Find middle of the list
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # Reverse second half of list
        prev = None
        while slow:
            next_node = slow.next
            slow.next = prev
            prev = slow
            slow = next_node

        # Check for palindrome
        left = head
        right = prev
        while right:
            if left.val != right.val:
                return False
            left = left.next
            right = right.next

        return True
    

# Note: to restore the original list, reverse the second half of the list again and connect it back to the first half. Not required by problem.

# Time complexity: O(n), where n is the number of nodes in the linked list.
# Space complexity: O(1)