from collections import deque
from typing import List


class CanVisitAllRooms:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        if not rooms:
            return True

        total_rooms = len(rooms)
        seen = [False] * total_rooms
        rooms_visited = 1
        seen[0] = True
        stack = deque([0])
        while stack:
            room = stack.pop()
            room_keys = rooms[room]
            for key in room_keys:
                if not seen[key]:
                    rooms_visited += 1
                    if rooms_visited == total_rooms:
                        return True
                    seen[key] = True
                    stack.append(key)

        return False


# Time Complexity: O(n + e) where n is the number of rooms
# and e is the total number of keys across all rooms.
# Space Complexity: O(n) for the seen array and the stack in the worst case.
