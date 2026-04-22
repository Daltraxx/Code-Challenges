from typing import Counter, List


class MinSetSize:
    def minSetSize(self, arr: List[int]) -> int:
        freqs = Counter(arr)
        sortedFreqs = sorted(freqs.values(), reverse=True)
        removed = 0
        half = len(arr) // 2
        set_size = 0
        for freq in sortedFreqs:
            removed += freq
            set_size += 1
            if removed >= half:
                return set_size

    # Time complexity: O(n log n) where n is the number of elements in the input array.
    # This is because we need to sort the frequencies of the elements, 
    # which takes O(n log n) time in the worst case where all elements are unique.
    # Space complexity: O(n) in the worst case, where all elements in the input array are unique.
