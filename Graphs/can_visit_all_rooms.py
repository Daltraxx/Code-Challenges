from collections import deque
from typing import List


class CanVisitAllRooms:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        def dfs(room: int) -> int:
            seen[room] = True
            rooms_visited = 1
            stack = deque([room])
            while stack:
                room = stack.pop()
                room_keys = rooms[room]
                for key in room_keys:
                    if not seen[key]:
                        seen[key] = True
                        rooms_visited += 1
                        stack.append(key)

            return rooms_visited

        total_rooms = len(rooms)
        rooms_visited = 1
        seen = [False] * total_rooms
        seen[0] = True
        for key in rooms[0]:
            if not seen[key]:
                rooms_visited += dfs(key)
                if rooms_visited == total_rooms:
                    return True

        return False


# Time Complexity: O(n + e) where n is the number of rooms
# and e is the total number of keys across all rooms.
# Space Complexity: O(n) for the seen array and the stack in the worst case.
