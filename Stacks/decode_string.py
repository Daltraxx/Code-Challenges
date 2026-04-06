class DecodeString:
    def decodeStrong(self, s: str) -> str:
        stack = []
        curr_str = ""
        curr_num = 0
        for char in s:
            if char.isdigit():
                curr_num = curr_num * 10 + int(char)  # Handles building multi-digit numbers
            elif char == "[":
                stack.append((curr_str, int(curr_num)))
                curr_str = ""
                curr_num = 0
            elif char == "]":
                prev_str, num = stack.pop()
                curr_str = prev_str + num * curr_str
            else:
                curr_str += char

        return curr_str


    # Time Complexity: O(n * k) where n is the length of the input string 
    # and k is the maximum number of repetitions for any substring. 
    # In the worst case, if we have a string like "100[abc]", 
    # we would be repeating "abc" 100 times, leading to O(n * 100) = O(n).
    # Space Complexity: O(n) for stack and .

    # Try recursive solution for heck of it
