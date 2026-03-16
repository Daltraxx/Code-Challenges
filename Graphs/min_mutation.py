from collections import deque
from typing import List


class MinMutation:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        if endGene not in bank:
            return -1

        bases = ["A", "C", "G", "T"]
        seen = set([startGene])
        queue = deque([startGene])
        mutations = 0
        while queue:
            for _ in range(len(queue)):
                gene = queue.popleft()
                if gene == endGene:
                    return mutations
                for i in range(len(gene)):
                    for base in bases:
                        if gene[i] == base:
                            continue
                        gene_list = list(gene)
                        gene_list[i] = base
                        new_gene = "".join(gene_list)
                        if new_gene in bank and new_gene not in seen:
                            seen.add(new_gene)
                            queue.append(new_gene)

            mutations += 1

        return -1


# Time Complexity: O(n) where n is the number of genes in the bank,
# since we scan the bank list for each potential mutation and may have to visit each gene at most once.
# Technically, the BFS runs in constant time since the gene length is fixed at 8 and there are only 4 possible bases.
# Space Complexity: O(n) for the seen set and the queue in the worst case where we visit all genes in the bank, 
# though could also be considered O(1) since the gene length is fixed and there are only 4^8 possible genes.
