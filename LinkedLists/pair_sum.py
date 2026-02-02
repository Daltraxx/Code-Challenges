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
            next_node = slow.next
            slow.next = prev
            prev = slow
            slow = next_node

        # Find max sum
        left_twin = head
        right_twin = prev
        max_sum = 0

        while right_twin:
            max_sum = max(left_twin.val + right_twin.val, max_sum)
            left_twin = left_twin.next
            right_twin = right_twin.next

        return max_sum


# Time Complexity: O(n) - We traverse the linked list multiple times but each traversal is linear.
# Space Complexity: O(1) - We use a constant amount of extra space.
