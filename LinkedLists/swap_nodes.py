from LinkedLists.list_node import ListNode


class SwapNodes:
    def swap_nodes(self, head: ListNode, k: int) -> ListNode:
        # Find the k-th node from the beginning
        right_node = head
        for _ in range(k - 1):
            right_node = right_node.next

        kth_from_beginning = right_node

        # Find the k-th node from the end
        kth_from_end = head
        while right_node and right_node.next:
            kth_from_end = kth_from_end.next
            right_node = right_node.next

        # Swap values
        kth_from_beginning.val, kth_from_end.val = (
            kth_from_end.val,
            kth_from_beginning.val,
        )

        return head


# Time Complexity: O(N)
# Space Complexity: O(1)
