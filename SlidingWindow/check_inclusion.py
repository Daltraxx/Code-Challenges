from collections import Counter


class CheckInclusion:
    def check_inclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        chars_needed = Counter(s1)
        required_chars = len(chars_needed)

        left = 0
        for right, char in enumerate(s2):
            if char in chars_needed:
                chars_needed[char] -= 1
                if chars_needed[char] == 0:
                    required_chars -= 1

            # maintain fixed window
            if right - left + 1 > len(s1):
                left_char = s2[left]
                if left_char in chars_needed:
                    if chars_needed[left_char] == 0:
                        required_chars += 1
                    chars_needed[left_char] += 1
                left += 1

            if required_chars == 0:
                return True

        return False


# Time complexity: O(N + M) where N is the length of s2 and M is the length of s1. M is included due to the initial population of the character count map.
# Space complexity: O(1) if limited to lowercase English letters. Otherwise, O(M) for the character count map.

s1 = "adc"
s2 = "dcda"
print(CheckInclusion().check_inclusion(s1, s2))
