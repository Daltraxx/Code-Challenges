class IsValid:
    def is_valid(s: str) -> bool:
        char_pairings = {")": "(", "}": "{", "]": "["}
        left_chars = {"(", "{", "["}
        stack = []
        for char in s:
            if char in left_chars:
                stack.append(char)
            else:
                if stack and stack[-1] == char_pairings.get(char):
                    stack.pop()
                else:
                    return False

        return True if len(stack) == 0 else False
