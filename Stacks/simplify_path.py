class SimplifyPath:
    def simplify_path(self, path: str) -> str:
        segments = path.split("/")
        stack = []
        for segment in segments:
            if segment == "" or segment == ".":
                continue
            elif segment == "..":
                if stack:
                    stack.pop()
            else:
                stack.append(segment)

        return "/" + "/".join(stack)


# Time complexity: O(n) where n is the length of the path string
# Space complexity: O(n) in the worst case if all segments are valid directory names

path = "/.../a/../b/c/../d/./"
print(SimplifyPath().simplify_path(path))
