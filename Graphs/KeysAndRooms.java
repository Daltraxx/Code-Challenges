import java.util.HashSet;
import java.util.List;
import java.util.Set;

/*There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. 
Your goal is to visit all the rooms. 
However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. 
Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, 
return true if you can visit all the rooms, or false otherwise. */


class KeysAndRooms {
    Set<Integer> seen = new HashSet<>();

    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        int numberOfRooms = rooms.size();
        seen.add(0);

        dfs(rooms.get(0), rooms);

        return seen.size() == numberOfRooms;
    }

    public void dfs(List<Integer> room, List<List<Integer>> rooms) {
        for (int key : room) {
            if (!seen.contains(key)) {
                seen.add(key);
                dfs(rooms.get(key), rooms);
            }
        }
    }
}