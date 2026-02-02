from list_node import ListNode


class ReverseBetween:
    def reverse_between(self, head: ListNode, left: int, right: int) -> ListNode:
        if not head or left == right:
            return head

        # Find node at left position (1-indexed)
        current = head
        left_prev = None
        for _ in range(left - 1):
            left_prev = current
            current = current.next

        # Reverse nodes in given range
        prev = None
        new_tail = current
        for _ in range(left, right + 1):
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node

        # Fix connections on left side
        new_head = prev
        if not left_prev:
            head = new_head
        else:
            left_prev.next = new_head

        # Fix connections on right side
        new_tail.next = current

        return head


# Time Complexity: O(N) where N is the number of nodes in the linked list
# Space Complexity: O(1)
