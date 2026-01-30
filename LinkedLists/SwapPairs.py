from list_node import ListNode


class SwapPairs:
    def swap_pairs(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        # The new head will always be the second node
        newHead = head.next
        prev = None
        current = head
        while current and current.next:
            if prev:
                prev.next = current.next

            prev = current
            next = current.next.next
            current.next.next = current
            current.next = next
            current = next

        return newHead


# Time Complexity: O(n)
# Space Complexity: O(1)
