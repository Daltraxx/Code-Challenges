from list_node import ListNode


class PairSum:

    def pair_sum(self, head: ListNode) -> int:
        # Find middle of the list
        fast = head
        slow = head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next

        # Reverse back half of list
        prev = None
        while slow:
            next = slow.next
            slow.next = prev
            prev = slow
            # Prevent moving slow to next node if next is None to avoid losing reference
            if not next:
                break
            slow = next

        # Find max sum
        node_a = head
        node_b = slow
        max_sum = float("-inf")

        while node_b:
            max_sum = max(node_a.val + node_b.val, max_sum)
            node_a = node_a.next
            node_b = node_b.next

        return max_sum


# Time Complexity: O(n) - We traverse the linked list multiple times but each traversal is linear.
# Space Complexity: O(1) - We use a constant amount of extra space.
