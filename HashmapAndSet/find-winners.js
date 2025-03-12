/*You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:
- answer[0] is a list of all players that have not lost any matches.
- answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:
You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.*/

const findWinners = (matches) => {
    const playerLossRecord = new Map();
    for (let [winner, loser] of matches) {
        if (!playerLossRecord.has(winner)) playerLossRecord.set(winner, 0);

        playerLossRecord.set(loser, (playerLossRecord.get(loser) || 0) + 1);
    }

    const ans = [[], []];
    for (let [player, losses] of playerLossRecord) {
        if (losses === 0) {
            ans[0].push(player);
        } else if (losses === 1) {
            ans[1].push(player);
        }
    }

    ans[0].sort((a, b) => a - b);
    ans[1].sort((a, b) => a - b);

    return ans;
}

//Time: O(nlogn) due to sort
//Space: O(n)

const matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];
console.log(findWinners(matches));