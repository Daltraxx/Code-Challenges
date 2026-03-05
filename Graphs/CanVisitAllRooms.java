import java.util.List;

/*There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. 
Your goal is to visit all the rooms. 
However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. 
Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, 
return true if you can visit all the rooms, or false otherwise. */


class CanVisitAllRooms {
    List<List<Integer>> rooms;
    boolean[] seen;

    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        this.rooms = rooms;
        int numberOfRooms = rooms.size();
        this.seen = new boolean[numberOfRooms];

        return dfs(0) == numberOfRooms;
    }

    private int dfs(int room) {
        seen[room] = true;
        int roomsVisited = 1;
        List<Integer> keys = rooms.get(room);
        for (int key : keys) {
            if (!seen[key]) {
                roomsVisited += dfs(key);
            }
        }

        return roomsVisited;
    }
}

// Time complexity: O(n + e) where n is the number of rooms 
// and e is the total number of keys in all rooms.
// Space complexity: O(n) for the seen array and the recursion stack.