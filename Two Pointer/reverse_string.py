from typing import List


class ReverseString:
    def reverseString(self, s: List[str]) -> None:
        left = 0
        right = len(s) - 1
        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1

# Time complexity: O(n), where n is the length of the input list. 
# We need to traverse half of the list to reverse it.
# Space complexity: O(1)