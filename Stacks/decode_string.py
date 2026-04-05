class DecodeString:
    def decodeStrong(s: str) -> str:
        str_stack = []
        curr_str = ""
        curr_num = ""
        for char in s:
            if char.isdigit():
                curr_num += char
            elif char == "[":
                str_stack.append((curr_str, int(curr_num)))
                curr_str = ""
                curr_num = ""
            elif char == "]":
                prev_str, num = str_stack.pop()
                curr_str = prev_str + num * curr_str
            else:
                curr_str += char

        return curr_str


# Time Complexity: O(n) where n is the length of the input string s
# Space Complexity: O(n) where n is the length of the input string s,
# in the worst case when all characters are digits and brackets, due to the use of stacks.
