from typing import List


class NumRescueBoats:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        left = 0
        right = len(people) - 1
        boats = 0
        while left <= right:
            light = people[left]
            heavy = people[right]
            if light + heavy <= limit:
                left += 1
            # Heaviest always gets on a boat, 
            # whether paired with the lightest or alone.
            right -= 1
            boats += 1

        return boats

    # Time complexity: O(n log n) due to the sorting step, 
    # where n is the number of people.
    # The two-pointer traversal takes O(n) time, 
    # but the sorting dominates the overall time complexity.
    # Space complexity: O(1) if we ignore the space used for sorting, 
    # which can be done in-place. 
    # Otherwise, the space complexity is O(n) 
    # due to the sorting algorithm's space requirements.