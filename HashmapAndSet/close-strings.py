from typing import Counter


class CloseStrings:
    def close_strings(self, word1: str, word2: str) -> bool:
        if len(word1) != len(word2):
            return False

        charSet1 = set(word1)
        charSet2 = set(word2)
        if charSet1 != charSet2:
            return False

        charCounts1 = Counter(word1)
        charCounts2 = Counter(word2)

        return sorted(charCounts1.values()) == sorted(charCounts2.values())

# Time complexity: O(n), where n is the length of the strings. Sorting the frequency counts takes O(1) time since there are at most 26 unique characters.
# Space complexity: O(1), since the space used for character sets and frequency counts is bounded by the number of unique characters (at most 26 for lowercase English letters).
word1 = "cabbba"
word2 = "abcccc"
print(CloseStrings().close_strings(word1, word2))
