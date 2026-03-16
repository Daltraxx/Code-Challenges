const minMutation = (startGene, endGene, bank) => {
  if (!bank.includes(endGene)) {
    return -1;
  }

  const bases = ["A", "C", "G", "T"];
  const seen = new Set([startGene]);
  let queue = [startGene];
  let mutations = 0;

  while (queue.length) {
    const nextQueue = [];

    for (const gene of queue) {
      if (gene === endGene) {
        return mutations;
      }

      const geneArray = gene.split("");
      for (let i = 0; i < gene.length; i++) {
        for (let base of bases) {
          const originalBase = geneArray[i];
          if (originalBase === base) {
            continue;
          }

          geneArray[i] = base;
          const newGene = geneArray.join("");

          if (bank.includes(newGene) && !seen.has(newGene)) {
            seen.add(newGene);
            nextQueue.push(newGene);
          }

          geneArray[i] = originalBase; // revert the change for the next iteration
        }
      }
    }

    queue = nextQueue;

    mutations++;
  }

  return -1;
};


// Time Complexity: O(n) where n is the number of genes in the bank,
// since we scan the bank list for each potential mutation and may have to visit each gene at most once.
// Technically, the BFS runs in constant time since the gene length is fixed at 8 and there are only 4 possible bases.
// Space Complexity: O(n) for the seen set and the queue in the worst case where we visit all genes in the bank, 
// though could also be considered O(1) since the gene length is fixed and there are only 4^8 possible genes.