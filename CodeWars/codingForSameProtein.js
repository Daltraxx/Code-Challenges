function codeForSameProtein(seq1, seq2) {
    if (seq1.length !== seq2.length || seq1.length % 3 !== 0) return false;

    let endPointer = 3;
    while (endPointer <= seq1.length) {
        const startPointer = endPointer - 3;
        const segment1 = seq1.slice(startPointer, endPointer);
        const segment2 = seq2.slice(startPointer, endPointer);
        if (codons[segment1] !== codons[segment2]) {
            return false;
        }
        endPointer += 3;
    }

    return true;
}