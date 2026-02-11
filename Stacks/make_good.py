class MakeGood:
    def make_good(self, s: str) -> str:
        stack = []
        for char in s:
            if stack and abs(ord(char) - ord(stack[-1])) == 32:
                stack.pop()
            else:
                stack.append(char)
        return "".join(stack)


# Time complexity: O(n) where n is the length of the input string s
# Space complexity: O(n) in the worst case if no characters are removed
