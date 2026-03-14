const openLock = (deadends, target) => {
    const getNeighborCombinations = (combination) => {
        const neighborCombinations = [];

        for (let i = 0; i < 4; i++) {
            let digit = +combination[i];
            for (let change of [1, -1]) {
                let newDigit = (digit + change + 10) % 10;
                const neighborCombination = combination.slice(0, i) + newDigit + combination.slice(i + 1);
                neighborCombinations.push(neighborCombination);
            }
        }

        return neighborCombinations;
    }

    const seen = new Set(deadends);

    if (seen.has('0000')) {
        return -1;
    }

    seen.add('0000');

    let queue = ['0000'];
    let turns = 0;

    while (queue.length) {
        const nextQueue = [];
        for (let combination of queue) {
            if (combination === target) {
                return turns;
            }
            for (let neighbor of getNeighborCombinations(combination)) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }
        }

        queue = nextQueue;
        turns++;
    }

    return -1;
}

console.log("0" + 1);