class DecodeString:
    def decodeStrong(s: str) -> str:
        brackets = []
        nums = []
        strs = []
        curr_num = ""
        ans = ""
        for char in s:
            if char == "[":
                brackets.append("[")
                nums.append(int(curr_num))
                curr_num = ""
            elif char == "]":
                brackets.pop()
                k = nums.pop()
                curr_str = k * strs.pop()
                if not brackets:
                    ans += curr_str
                    curr_str = ""
                else:
                    strs[-1] += curr_str
            elif char.isdigit():
                curr_num += char
                if len(curr_num) == 1:
                    strs.append("")
            else:
                if not brackets:
                    ans += char
                else:
                    if strs:
                        strs[-1] += char
                    else:
                        strs.append(char)

        return ans

# Time Complexity: O(n) where n is the length of the input string s
# Space Complexity: O(n) where n is the length of the input string s, in the worst case when all characters are digits and brackets, due to the use of stacks.