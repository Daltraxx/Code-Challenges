from collections import deque
from typing import List


class CanVisitAllRooms:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        # Edge case: if there are no rooms, we can consider that we have visited all rooms.
        # Not strictly necessary given the problem constraints, but it's a safe check.
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
                    seen[key] = True
                    rooms_visited += 1
                    stack.append(key)

        return rooms_visited == total_rooms


# Time Complexity: O(n + e) where n is the number of rooms
# and e is the total number of keys across all rooms.
# Space Complexity: O(n) for the seen array and the stack in the worst case.
