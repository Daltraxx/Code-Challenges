const findWinners = (matches) => {
  const playerLossRecord = new Map();
  for (let [winner, loser] of matches) {
    playerLossRecord.set(winner, playerLossRecord.get(winner) || 0);
    playerLossRecord.set(loser, (playerLossRecord.get(loser) || 0) + 1);
  }

  const oneLossPlayers = [];
  const zeroLossPlayers = [];

  for (let [player, losses] of playerLossRecord) {
    if (losses === 0) {
      zeroLossPlayers.push(player);
    } else if (losses === 1) {
      oneLossPlayers.push(player);
    }
  }

  zeroLossPlayers.sort((a, b) => a - b);
  oneLossPlayers.sort((a, b) => a - b);

  return [zeroLossPlayers, oneLossPlayers];
};

// Time complexity: O(n log n) where n is the number of matches.
// We iterate through the matches once to build the loss counts,
// which takes O(n).
// Then we iterate through the loss counts to build the answer,
// which takes O(p) for each list, where p is the number of players in the list,
// or O(n) in the worst case where all players are unique.
// Finally, we sort the two lists of players,
// which takes O(p log p),
// or O(n log n) in the worst case where all players are unique.
// Space complexity: O(n) in the worst case where all players are unique
// and we need to store their loss counts and the answer lists.
