from collections import Counter
from typing import List


class FindLeastNumUniqueInts:
    def findLeastNumUniqueInts(self, arr: List[int], k: int) -> int:
        frequencies = Counter(arr)
        frequency_vals = sorted(frequencies.values())
        unique_ints = len(frequencies)
        for frequency in frequency_vals:
            if k >= frequency:
                k -= frequency
                unique_ints -= 1
            else:
                break

        return unique_ints

    # Time complexity: O(n log n) where n is the number of elements in the input array.
    # We need to count the frequency of each integer, which takes O(n) time.
    # Sorting the frequency values takes O(m log m) time, where m is the number of unique integers.
    # In the worst case, if all integers are unique, m can be equal to n, leading to O(n log n) time.
    # Space complexity: O(m) where m is the number of unique integers in the input array.
