from collections import Counter


class CheckInclusion:
    def check_inclusion(self, s1: str, s2: str) -> bool:
        total = len(s1)
        chars = Counter(s1)
        left = 0
        for right in range(len(s2)):
            right_char = s2[right]
            if right_char in chars and chars.get(right_char) > 0:
                chars[right_char] -= 1
                total -= 1
                if total == 0:
                    return True
            elif right_char in chars and chars.get(right_char) == 0:
                chars[right_char] -= 1
                total -= 1
                while chars.get(right_char) < 0:
                    left_char = s2[left]
                    if left_char in chars:
                        chars[left_char] += 1
                        total += 1
                    left += 1
            else:
                total = len(s1)
                while left <= right:
                    left_char = s2[left]
                    if left_char in chars:
                        chars[left_char] += 1
                    left += 1
        return False

    def check_inclusion_improved(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        chars_needed = Counter(s1)
        window_chars = Counter()
        required_chars = len(chars_needed)
        resolved_chars = 0

        left = 0
        for right, char in enumerate(s2):
            window_chars[char] += 1

            if char in chars_needed and window_chars[char] == chars_needed[char]:
                resolved_chars += 1

            # maintain fixed window
            if right - left + 1 > len(s1):
                left_char = s2[left]
                if (
                    left_char in chars_needed
                    and window_chars[left_char] == chars_needed[left_char]
                ):
                    resolved_chars -= 1
                window_chars[left_char] -= 1
                left += 1

            if resolved_chars == required_chars:
                return True

        return False


# Time complexity: O(N) where N is the length of s2.
# Space complexity: O(1) since the character count map has a fixed size of 26 for lowercase letters.

s1 = "adc"
s2 = "dcda"
print(CheckInclusion().check_inclusion(s1, s2))
