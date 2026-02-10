class BackspaceCompare:

    def backspace_compare(self, s: str, t: str) -> bool:
        return self.build_stack(s) == self.build_stack(t)

    @staticmethod
    def build_stack(string: str) -> list[str]:
        stack = []
        for char in string:
            if char == "#" and stack:
                stack.pop()
            elif char != "#":
                stack.append(char)
        return stack


# Time Complexity: O(n + m) where n and m are the lengths of the input strings s and t respectively
# Space Complexity: O(n + m) in the worst case when all characters in s and t are unique and there are no backspace characters '#'
