function openTheLock(deadends, target) {
    const getNeighbors = (combo) => {
        const neighbors = [];
        for (let i = 0; i < combo.length; i++) {
            let digit = Number(combo[i]);
            for (let change of [-1, 1]) {
                let newDigit = digit + change;
                if (newDigit < 0) newDigit = 9;
                if (newDigit > 9) newDigit = 0;
                
                let newCombo = combo.slice(0, i) + `${newDigit}` + combo.slice(i + 1);
                neighbors.push(newCombo);
            }
        }

        return neighbors;
    }

    deadends = new Set(deadends);

    if (deadends.has(target)) return -1;

    const seen = new Set(['0000', ...deadends]);

    let queue = ['0000'];
    let turns = 0;

    while (queue.length) {
        const nextQueue = [];

        for (let combo of queue) {
            if (combo === target) return turns;

            const neighbors = getNeighbors(combo);
            for (let adjacentCombo of neighbors) {
                if (!seen.has(adjacentCombo)) {
                    seen.add(adjacentCombo);
                    nextQueue.push(adjacentCombo);
                }
            }
        }

        turns++;
        queue = nextQueue;
    }

    return -1;
}

const deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = '8888';
console.log(openTheLock(deadends, target));
