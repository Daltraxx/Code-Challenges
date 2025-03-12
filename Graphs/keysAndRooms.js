/*There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. 
Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. 
Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, 
return true if you can visit all the rooms, or false otherwise.*/

const canVisitAllRooms = (rooms) => {
    const visitedRooms = new Set([0]);

    const visitRooms = (room) => {
        for (let key of room) {
            if (!visitedRooms.has(key)) {
                visitedRooms.add(key);
                visitRooms(rooms[key]);
            }
        }
    }

    const visitRoomsIterative = (room) => {
        const stack = [room];
    
        while (stack.length) {
            const keys = stack.pop();
    
            for (let key of keys) {
                if (!visitedRooms.has(key)) {
                    visitedRooms.add(key);
                    stack.push(rooms[key]);
                }
            }
        }
    }

    visitRoomsIterative(rooms[0]);

    return rooms.length === visitedRooms.length;
}

