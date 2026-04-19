from collections import Counter


class CanConstruct:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        mag_letters = Counter(magazine)
        for char in ransomNote:
            mag_letters[char] -= 1
            if mag_letters[char] < 0:
                return False
        return True

    # Time complexity: O(n + m) where n is the length of ransomNote and m is the length of magazine.
    # We iterate through the magazine to count the characters, which takes O(m) time.
    # Then we iterate through the ransomNote to check if we have enough characters, which can take O(n) time.
    # Space complexity: O(m) for storing the character counts of the magazine, 
    # though in the worst case it could be O(1) 
    # if we consider the character set to be limited (e.g., only lowercase letters).