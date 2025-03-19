function getNumsMissingMaps() {
    const numsRequired = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const sectionNumsMissing = new Map();
    const rowNumsMissing = new Map();
    const colNumsMissing = new Map();
    for (let i = 0; i < 9; i++) {
        sectionNumsMissing.set(i, new Set(numsRequired));
        rowNumsMissing.set(i, new Set(numsRequired));
        colNumsMissing.set(i, new Set(numsRequired));
    }

    return { sectionNumsMissing, rowNumsMissing, colNumsMissing };
}

function getSection(row, col) {
    if (row < 3) {
        if (col < 3) { return 0; } 
        else if (col < 6) { return 1; }
        else { return 2; }
    } else if (row < 6) {
        if (col < 3) { return 3; } 
        else if (col < 6) { return 4; }
        else { return 5; }
    } else {
        if (col < 3) { return 6; } 
        else if (col < 6) { return 7; }
        else { return 8; }
    }
}


function sudoku(puzzle) {
    const n = puzzle.length;
    const { sectionNumsMissing, rowNumsMissing, colNumsMissing } = getNumsMissingMaps();
    const emptyCellPositions = [];
    
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            const num = puzzle[row][col];
            const section = getSection(row, col);

            if (num === 0) {
                emptyCellPositions.push({ section, row, col });
            } else {
                sectionNumsMissing.get(section).delete(num);
                rowNumsMissing.get(row).delete(num);
                colNumsMissing.get(col).delete(num);
            }
        }
    }

    

    return emptyCellPositions;
}

const puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0, 0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

console.log(sudoku(puzzle));
//console.log(getSection(7, 0));



// function getSection(row, col) {
//     //consider only having to build sections object array once
//     const sections = Array.from({ length: 9}, () => ({}));

//     sections.forEach((section, i) => {
//         section.index = i;
//         if (i < 3) section.rowRange = [0, 2];
//         if (i >= 3 && i < 6) section.rowRange = [3, 5];
//         if (i >= 6) section.rowRange = [6, 8];
//         if (i % 3 === 0) section.colRange = [0, 2];
//         if (i % 3 === 1) section.colRange = [3, 5];
//         if (i % 3 === 2) section.colRange = [6, 8];
//     })



//     const sectionIndex = sections.findIndex(section => {
//         const { rowRange, colRange } = section;
        
//         const correctRow = row >= rowRange[0] && row <= rowRange[1];
//         const correctCol = col >= colRange[0] && col <= colRange[1];
        
//         return correctRow && correctCol;
//     })

//     return sectionIndex;
// }