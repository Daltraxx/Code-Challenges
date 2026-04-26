from typing import Optional

from list_node import ListNode


class ReverseList:
    def reverseList(self, head: Optional[ListNode]) -> ListNode:
        if not head:
            return head
        prev = None
        while head:
            next = head.next
            head.next = prev
            prev = head
            head = next

        return prev
    
    def reverseListRecursive(self, head: Optional[ListNode]) -> ListNode:
        def reverse_list(prev: Optional[ListNode], current: Optional[ListNode]) -> ListNode:
            if not current:
                return prev
            
            next = current.next
            current.next = prev
            return reverse_list(current, next)
        
        return reverse_list(None, head)
        

