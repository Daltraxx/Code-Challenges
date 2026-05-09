const canVisitAllRoomsIterative = (rooms: number[][]): boolean => {
  const n = rooms.length;
  const seen = new Array(n).fill(false);
  const stack = [0];
  seen[0] = true;
  let roomCount = 1;
  while (stack.length) {
    const room = stack.pop()!;
    for (const key of rooms[room]) {
      if (!seen[key]) {
        roomCount++;
        seen[key] = true;
        stack.push(key);
      }
    }
  }

  return roomCount === n;
}



// Time Complexity: O(N + E) where N is the number of rooms and E is the total number of keys in all rooms.
// Space Complexity: O(N) where N is the number of rooms. 
// This space is used by the seen array and the recursion stack in the worst case where all rooms are connected in a single chain.