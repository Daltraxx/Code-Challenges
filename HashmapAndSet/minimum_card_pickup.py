from typing import List


class MinimumCardPickup:
    def minimumCardPickup(self, cards: List[int]) -> int:
        card_map = {}
        min_consecutive = float("inf")
        for i, card in enumerate(cards):
            if card in card_map:
                min_consecutive = min(i - card_map[card] + 1, min_consecutive)
            card_map[card] = i

        return min_consecutive if min_consecutive != float("inf") else -1

    # Time complexity: O(n) where n is the number of elements in the input array.
    # We iterate through the input array once, performing constant time operations for each element.
    # Space complexity: O(n) in the worst case where all cards are unique.