class SimplifyPath:
    def simplify_path(self, path: str) -> str:
        segments = path.split("/")
        stack = []
        stack.append("")  # Ensures path starts with / upon join
        for segment in segments:
            match segment:
                case "":
                    pass
                case ".":
                    pass
                case "..":
                    if len(stack) > 1:
                        stack.pop()
                case _:
                    stack.append(segment)

        return "/".join(stack) if len(stack) > 1 else "/"

# Time complexity: O(n) where n is the length of the path string
# Space complexity: O(n) in the worst case if all segments are valid directory names

path = "/.../a/../b/c/../d/./"
print(SimplifyPath().simplify_path(path))
