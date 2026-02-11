class SimplifyPath:
    def simplify_path(self, path: str) -> str:
        segments = path.split("/")
        print(segments)
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


path = "/.../a/../b/c/../d/./"
print(SimplifyPath().simplify_path(path))
