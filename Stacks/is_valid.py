class IsValid:
    def is_valid(s: str) -> bool:
        char_pairings = {'(': ')', '{': '}', '[': ']'}
        stack = []
        for char in s:
            if char in char_pairings:
                stack.append(char)
            else:
                if stack and char == char_pairings.get(stack[-1]):
                    stack.pop()
                else:
                    return False

        return len(stack) == 0
