from LinkedLists.list_node import ListNode


class HasCycle:
    def hasCycle(self, head: ListNode):
        slow = head
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if fast is slow:
                return True

        return False

    # Time complexity: O(n) where n is the number of nodes in the linked list.
    # In the worst case, we may need to traverse the entire linked list once.
    # Space complexity: O(1) since we are using only a constant amount of extra space 
    # for the slow and fast pointers.