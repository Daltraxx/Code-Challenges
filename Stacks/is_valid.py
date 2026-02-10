class IsValid:
    def is_valid(self, s: str) -> bool:
        char_pairings = {'(': ')', '{': '}', '[': ']'}
        stack = []
        for char in s:
            if char in char_pairings:
                # Add left parentheses to stack
                stack.append(char)
            else:
                # Evaluate right parentheses against stack
                if stack and char == char_pairings[stack[-1]]:
                    stack.pop()
                else:
                    return False

        return len(stack) == 0

# Time Complexity: O(n) where n is the length of the input string s
# Space Complexity: O(n) in the worst case when all characters in s are left parentheses