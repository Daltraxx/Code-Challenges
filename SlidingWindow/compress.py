from typing import List


class Compress:
    def compress(self, chars: List[str]) -> int:
        def write_compressed_char(char: str, char_count: int) -> None:
            nonlocal write

            if char_count == 1:
                chars[write] = char
                write += 1
                return

            compressed_char = f"{char}{char_count}"
            for c in compressed_char:
                chars[write] = c
                write += 1

        n = len(chars)
        write = 0
        left = 0
        for right in range(n):
            if chars[right] != chars[left]:
                char = chars[left]
                char_count = right - left
                write_compressed_char(char, char_count)
                left = right

        char = chars[left]
        char_count = n - left
        write_compressed_char(char, char_count)

        return write


# Time complexity: O(n). We iterate through the input list of characters once,
# resulting in O(n) time complexity.
# Space complexity: O(1).
# We use a constant amount of extra space to store the compressed characters,
# and we modify the input list in place
# without using any additional data structures that grow with the input size.
