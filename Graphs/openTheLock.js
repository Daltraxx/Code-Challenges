/*You have a lock in front of you with 4 circular wheels. 
Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. 
The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. 
Each move consists of turning one wheel one slot.

The lock initially starts at '0000', a string representing the state of the 4 wheels.

You are given a list of deadends dead ends, meaning if the lock displays any of these codes, 
the wheels of the lock will stop turning and you will be unable to open it.

Given a target representing the value of the wheels that will unlock the lock, 
return the minimum total number of turns required to open the lock, or -1 if it is impossible. */

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