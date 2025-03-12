/*Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, 
return the researcher's h-index.

The h-index is defined as the maximum value of h 
such that the given researcher has published at least h papers 
that have each been cited at least h times.*/

const hIndex = (citations) => {
    //sort in ascending order
    const sortedCitations = citations.sort((a, b) => a - b);

    let i = 0;
    while (i < sortedCitations.length && sortedCitations[sortedCitations.length - 1 - i] > i) {
        i++;
    }

    return i;
}

/*Time complexity : O(nlogn). Comparison sorting dominates the time complexity.

Space complexity : O(1). Most libraries using heap sort which costs O(1) extra space in the worst case.*/

const hIndexCounting = (citations) => {
    
}

const citations = [3,0,6,1,5];

console.log(hIndexCounting(citations));