from collections import Counter, defaultdict


class MaxNumberOfBalloons:
    def maxNumberOfBalloons(self, text: str) -> int:
        char_counts = Counter(text)
        balloon = "balloon"
        balloon_count = 0
        letters_remain = True
        while letters_remain:
            for char in balloon:
                if char_counts[char] == 0:
                    letters_remain = False
                    break
                else:
                    char_counts[char] -= 1
            if letters_remain:
              balloon_count += 1

        return balloon_count
    
    # Time complexity: O(n) where n is the number of characters in the input string.
    # We iterate through the input string once to count the characters, 
    # and then we iterate through the characters in the word "balloon" 
    # a number of times that is at most 
    # the number of characters in the input string divided by the length of "balloon".
    # Space complexity: O(1) since the character counts are stored 
    # in a fixed size hash map with at most 26 entries (assuming only lowercase letters).
    
    def maxNumberOfBalloonsMath(self, text: str) -> int:
        one_required = ["b", "a", "n"]
        two_required = ["l", "o"]
        char_counts = Counter(text)
        min_possible = float("inf")
        for char in one_required:
            min_possible = min(char_counts[char], min_possible)
        for char in two_required:
            can_make = char_counts[char] // 2
            min_possible = min(can_make, min_possible)
        return min_possible
    
    # Time complexity: O(n) where n is the number of characters in the input string.
    # We iterate through the input string once to count the characters,
    # and then we iterate through the characters in the word "balloon" a constant number of times.
    # Space complexity: O(1) since the character counts are stored in a 
    # fixed size hash map with at most 26 entries (assuming only lowercase letters).

