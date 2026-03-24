from typing import List


class Compress:
    def compress(self, chars: List[str]) -> int:
        n = len(chars)
        write = 0
        left = 0
        for right in range(n):
            if chars[right] != chars[left]:
                char = chars[left]
                char_count = right - left
                if char_count == 1:
                    chars[write] = char
                    write += 1
                else:
                    compressed_char = f"{char}{char_count}"
                    for c in compressed_char:
                        chars[write] = c
                        write += 1
                left = right

        if left == n - 1:
            chars[write] = chars[left]
            write += 1
        else:
            char = chars[left]
            char_count = n - left
            compressed_char = f"{char}{char_count}"
            for c in compressed_char:
                chars[write] = c
                write += 1
        
        return write

# Time complexity: O(n). We iterate through the input list of characters once, 
# resulting in O(n) time complexity.
# Space complexity: O(1). 
# We use a constant amount of extra space to store the compressed characters, 
# and we modify the input list in place 
# without using any additional data structures that grow with the input size.