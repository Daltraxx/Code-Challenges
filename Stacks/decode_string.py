class DecodeString:
    def decodeString(self, s: str) -> str:
        stack = []
        curr_str = ""
        curr_num = 0
        for char in s:
            if char == "[":
                # Save the previous context before going into the new one
                stack.append((curr_str, curr_num))
                curr_str = ""
                curr_num = 0
            elif char == "]":
                # Resolve the current context and combine it with the previous one
                prev_str, num = stack.pop()
                curr_str = prev_str + num * curr_str
            elif char.isdigit():
                curr_num = curr_num * 10 + int(char)  # Handles building multi-digit numbers
            else:
                curr_str += char

        return curr_str


    # Time Complexity: O(n * k) where n is the length of the input string 
    # and k is the maximum number of repetitions for any substring. 
    # In the worst case, if we have a string like "100[abc]", 
    # we would be repeating "abc" 100 times, leading to O(n * 100) = O(n).
    # Space Complexity: O(n) for stack and current string.

    def decodeStringRecursive(self, s: str) -> str:
        i = 0

        def dfs() -> str:
            nonlocal i
            curr_str = []
            curr_num = 0
            while i < len(s):
                char = s[i]
                if char == "[":
                    i += 1 # Move past the opening bracket
                    curr_str += curr_num * dfs()
                    curr_num = 0
                elif char == "]":
                    i += 1 # Move past the closing bracket
                    return "".join(curr_str)
                elif char.isdigit():
                    curr_num = curr_num * 10 + int(char)
                    i += 1
                else:
                    curr_str.append(char)
                    i += 1
            
            return "".join(curr_str)
        
        return dfs()
    
    # Time Complexity: O(n * k) where n is the length of the input string 
    # and k is the maximum number of repetitions for any substring.
    # Space Complexity: O(n) for the call stack in the worst case of nested brackets.
