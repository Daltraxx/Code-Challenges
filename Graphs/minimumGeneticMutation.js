/*A gene string can be represented by an 8-character long string, 
with choices from 'A', 'C', 'G', and 'T'.

Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.

For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
There is also a gene bank bank that records all the valid gene mutations. 
A gene must be in bank to make it a valid gene string.

Given the two gene strings startGene and endGene and the gene bank bank, 
return the minimum number of mutations needed to mutate from startGene to endGene. 
If there is no such a mutation, return -1.

Note that the starting point is assumed to be valid, so it might not be included in the bank.*/

const minMutation = (startGene, endGene, bank) => {
    const getNeighbors = (gene) => {
        const bases = ['A', 'C', 'G', 'T'];
        const neighbors = [];

        for (let i = 0; i < gene.length; i++) {
            for (let base of bases) {
                if (gene[i] !== base) {
                    neighbors.push(gene.slice(0, i) + base + gene.slice(i + 1));
                }
            }
        }


        return neighbors;
    }

    const bankSet = new Set(bank);
    const seen = new Set([startGene]);

    let queue = [startGene];
    let mutationCount = 0;

    while (queue.length) {
        const nextQueue = [];
        
        for (let gene of queue) {
            if (gene === endGene) {
                return mutationCount;
            }

            for (let neighbor of getNeighbors(gene)) {
                if (bankSet.has(neighbor) && !seen.has(neighbor)) {
                    seen.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }
        }

        mutationCount++;
        queue = nextQueue;
    }

    return -1;
}