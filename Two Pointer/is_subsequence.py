from bisect import bisect_right
from collections import defaultdict


class IsSubsequence:
    def isSubsequence(self, s: str, t: str) -> bool:
        s_pointer = 0
        t_pointer = 0
        while s_pointer < len(s) and t_pointer < len(t):
            if s[s_pointer] == t[t_pointer]:
                s_pointer += 1
            t_pointer += 1

        return s_pointer == len(s)

    # Time complexity: O(n) where n is the length of string t.
    # In the worst case, we may need to traverse the entire string t to find all characters of s.
    # Space complexity: O(1)

    # FOLLOW-UP: 
    # Solution for follow-up question where we have many s strings to check against the same t string.
    # We can preprocess t to create a mapping of characters to their indices in t,
    # and then use binary search to efficiently check if each character of s appears in the correct order in t.
    def isSubsequencePreprocessT(self, t: str) -> defaultdict:
        char_map = defaultdict(list)
        for i, char in enumerate(t):
            char_map[char].append(i)

        return char_map

    def isSubsequencePreprocessedT(self, s: str, t_char_map: defaultdict) -> bool:
        prev = -1
        for char in s:
            if char not in t_char_map:
                return False
            index_list = t_char_map[char]
            i = bisect_right(index_list, prev)
            if i == len(index_list):
                return False
            prev = index_list[i]

        return True

    # Time complexity for preprocessing: O(n) where n is the length of string t,
    # as we need to traverse t once to build the character map.
    # Time complexity for checking each s string: O(m log k) where m is the length of string s
    # and k is the average number of occurrences of each character in t (due to binary search).
    # Space complexity: O(n) for the character map, where n is the length of string t,
    # as in the worst case, all characters in t could be unique and we would store their indices in the map.
