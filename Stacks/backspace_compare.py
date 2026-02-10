class BackspaceCompare:
    def backspace_compare(self, s: str, t: str) -> bool:
        s_stack = []
        t_stack = []

        for char in s:
            if char == "#":
                s_stack.pop() if s_stack else None
            else:
                s_stack.append(char)

        for char in t:
            if char == "#":
                t_stack.pop() if t_stack else None
            else:
                t_stack.append(char)

        return s_stack == t_stack


# Time Complexity: O(n + m) where n and m are the lengths of the input strings s and t respectively
# Space Complexity: O(n + m) in the worst case when all characters in s and t are unique and there are no backspace characters '#'
