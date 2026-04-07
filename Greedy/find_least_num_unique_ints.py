from collections import Counter
from typing import List


class FindLeastNumUniqueInts:
    def findLeastNumUniqueInts(self, arr: List[int], k: int) -> int:
        frequencies = Counter(arr)
        sorted_frequencies = sorted(frequencies, key=frequencies.get)
        for num in sorted_frequencies:
            if k > frequencies[num]:
                k -= frequencies[num]
                del frequencies[num]
            else:
                break

        return len(frequencies)
