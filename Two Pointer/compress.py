from typing import List


class Compress:
    def compress(self, chars: List[str]) -> int:
        n = len(chars)
        write = 0
        left = 0
        for right in range(1, n + 1):
            # When we reach the end of the list or encounter a different character,
            # we need to write the compressed form of the current character sequence.
            # Terminating at n + 1 instead of n allows us to handle the last character sequence without
            # additional logic after the loop.
            if right == n or chars[right] != chars[left]:
                char = chars[left]
                char_count = right - left
                chars[write] = char
                write += 1
                if char_count > 1:
                    for digit in str(char_count):
                        chars[write] = digit
                        write += 1

                left = right

        return write


# Time complexity: O(n). We iterate through the input list of characters once,
# resulting in O(n) time complexity.
# Space complexity: O(1).
# We use a constant amount of extra space to store the compressed characters,
# and we modify the input list in place
# without using any additional data structures that grow with the input size.
