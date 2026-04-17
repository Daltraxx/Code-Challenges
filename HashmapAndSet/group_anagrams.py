from collections import defaultdict
from typing import List


class GroupAnagrams:
    def groupAnagramsTuple(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)
        for s in strs:
            freq = [0] * 26
            for c in s:
                freq[ord(c) - ord("a")] += 1
            freq_tuple = tuple(freq)
            groups[freq_tuple].append(s)

        return list(groups.values())

    # Time complexity: O(n * m) where n is the number of strings in the input array 
    # and m is the maximum length of a string in the input array.
    # We iterate through the input array once, and for each string, 
    # we compute its frequency tuple in O(m) time.
    # Space complexity: O(n * m) in the worst case where all strings are unique and have a length of m, 
    # resulting in n unique frequency tuples stored in the hashmap.

    def groupAnagramsSorted(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)
        for s in strs:
            s_sorted = "".join(sorted(list(s)))
            groups[s_sorted].append(s)

        return list(groups.values())

    # Time complexity: O(n * m log m) where n is the number of strings in the input array
    # and m is the maximum length of a string in the input array.
    # We iterate through the input array once, and for each string, we sort it in
    # O(m log m) time.
    # Space complexity: O(n * m) in the worst case where all strings are unique
    # and have a length of m, resulting in n unique sorted strings stored in the hashmap.