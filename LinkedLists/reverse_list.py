from typing import Optional

from list_node import ListNode


class ReverseList:
    def reverseList(self, head: Optional[ListNode]) -> ListNode:
        prev = None
        while head:
            next_node = head.next
            head.next = prev
            prev = head
            head = next_node

        return prev
    
    def reverseListRecursive(self, head: Optional[ListNode]) -> ListNode:
        def reverse_list(prev: Optional[ListNode], current: Optional[ListNode]) -> ListNode:
            if not current:
                return prev
            
            next_node = current.next
            current.next = prev
            return reverse_list(current, next_node)
        
        return reverse_list(None, head)
    
    def reverseListRecursiveCanonical(self, head: Optional[ListNode]) -> ListNode:
        if not head or not head.next:
            return head
        
        new_head = self.reverseListRecursiveCanonical(head.next)
        head.next.next = head
        head.next = None
        return new_head
        
    # Time complexity: O(n) where n is the number of nodes in the linked list.
    # We visit each node exactly once to reverse the pointers.
    # Space complexity: O(1) for the iterative approach, 
    # as we only use a constant amount of extra space.
    # For the recursive approaches, 
    # the space complexity is O(n) due to the call stack.
