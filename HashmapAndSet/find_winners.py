from collections import defaultdict
from typing import List


class FindWinners:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        loss_counts = defaultdict(int)
        for winner, loser in matches:
            loss_counts[winner] += 0
            loss_counts[loser] += 1
        zero_losses = []
        one_loss = []
        for player, loss_count in loss_counts.items():
            if loss_count == 0:
                zero_losses.append(player)
            elif loss_count == 1:
                one_loss.append(player)
        return [sorted(zero_losses), sorted(one_loss)]

    # Time complexity: O(n log n) where n is the number of matches.
    # We iterate through the matches once to build the loss counts, 
    # which takes O(n).
    # Then we iterate through the loss counts to build the answer, 
    # which takes O(p) for each list, where p is the number of players in the list, 
    # or O(n) in the worst case where all players are unique.
    # Finally, we sort the two lists of players, 
    # which takes O(p log p), 
    # or O(n log n) in the worst case where all players are unique.
    # Space complexity: O(n) in the worst case where all players are unique 
    # and we need to store their loss counts and the answer lists.
