class RemoveDuplicates:
    def remove_duplicates(self, s: str) -> str:
        stack = []
        for char in s:
            if len(stack) > 0 and char == stack[-1]:
                stack.pop()
            else:
                stack.append(char)

        return "".join(stack)

# Time Complexity: O(n) where n is the length of the input string s
# Space Complexity: O(n) in the worst case when all characters in s are unique