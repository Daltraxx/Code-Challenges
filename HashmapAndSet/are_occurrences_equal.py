from typing import List


class AreOccurrencesEqual:
    def areOccurrencesEqual(self, s: List[str]) -> bool:
        frequencies = [0] * 26
        for char in s:
            frequencies[ord(char) - ord("a")] += 1

        prev_count = 0
        for count in frequencies:
            if count > 0 and prev_count:
                if count != prev_count:
                    return False
            elif count > 0:
                prev_count = count

        return True

    # Time complexity: O(n) where n is the length of the input string.
    # We need to iterate through the input string once to count the frequency of each character.
    # Iterating through the frequency array takes O(1) time since it has a fixed size of 26.
    # Space complexity: O(1) since the frequency array
    # has a fixed size of 26 regardless of the input size.
