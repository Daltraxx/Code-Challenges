const snakesAndLadders = (board) => {
  const n = board.length;
  const end = n * n;

  // Flatten the board into a 1-indexed array
  const flattenedBoard = new Array(end + 1);
  let idx = 1;
  let leftToRight = true;
  for (let row = n - 1; row >= 0; row--) {
    for (
      let col = leftToRight ? 0 : n - 1;
      leftToRight ? col < n : col >= 0;
      col += leftToRight ? 1 : -1
    ) {
      flattenedBoard[idx++] = board[row][col];
    }
    leftToRight = !leftToRight;
  }

  const seen = new Array(end + 1).fill(false);
  seen[1] = true;
  let queue = [1];
  let rolls = 0;

  while (queue.length) {
    rolls++;
    const nextQueue = [];
    for (const square of queue) {
      for (let roll = 1; roll <= 6; roll++) {
        let newSquare = square + roll;
        if (newSquare > end) break;
        if (flattenedBoard[newSquare] !== -1) {
          newSquare = flattenedBoard[newSquare];
        }
        if (newSquare === end) return rolls;
        if (!seen[newSquare]) {
          seen[newSquare] = true;
          nextQueue.push(newSquare);
        }
      }
    }
    queue = nextQueue;
  }

  return -1;
};

// Time complexity: O(n^2) where n is the length of the board. We may have to
// visit every square on the board.
// Space complexity: O(n^2) where n is the length of the board. We need to store
// the flattened board and the seen array, both of which have size n^2.
