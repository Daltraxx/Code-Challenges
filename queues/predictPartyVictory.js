const predictPartyVictory = (senate) => {
  let queue = [];
  let direCount = 0;
  let radiantCount = 0;

  for (let member of senate) {
    queue.push(member);
    if (member === "D") {
      direCount++;
    } else radiantCount++;
  }

  let direBans = 0;
  let radiantBans = 0;

  while (direCount && radiantCount) {
    const nextQueue = [];
    for (let member of queue) {
      if (member === "D") {
        if (radiantBans > 0) {
          radiantBans--;
          direCount--;
        } else {
          direBans++;
          nextQueue.push(member);
        }
      } else {
        if (direBans > 0) {
          direBans--;
          radiantCount--;
        } else {
          radiantBans++;
          nextQueue.push(member);
        }
      }
    }
    queue = nextQueue;
  }

  return direCount > 0 ? "Dire" : "Radiant";
};

// Time complexity: O(n)
// Space complexity: O(n)