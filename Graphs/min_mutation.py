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