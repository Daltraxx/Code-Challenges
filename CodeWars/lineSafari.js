const grid = [
    "                      ",    
    "   +-------+          ",
    "   |      +++---+     ",
    "X--+      +-+   X     "
    ] // true

console.log(line(grid));

function line(grid) {
    const X = 'X',  CORNER = '+', HORIZONTAL = '-', VERTICAL = '|', EMPTY = ' ';

    const height = grid.length;
    const width = grid[0].length;

    const directions = {
        left: [-1, 0],
        right: [1, 0],
        up: [0, -1],
        down: [0, 1]
    }

    const origins = [];
    let pathCharCount = 0;

    // add starting positions to origins array and get count of characters which must be included in a valid line
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            const positionChar = grid[row][col];
            if (positionChar !== EMPTY) pathCharCount++; 
            if (grid[row][col] === X) origins.push([row, col]);
        }
    }

    // iterate over origins and search for valid line
    let seen;
    for (let origin of origins) {
        seen = new Set([origin.toString()]);
        if (findPath(origin)) return true;
    }

    return false;

    // ---------------helper functions

    function findPath(origin) {
        let lastDirection;
        let currentRow, currentCol;
        let stepCount = 0;

        while (true) {
            stepCount++;
            if (currentRow === undefined) {
                [currentRow, currentCol] = origin;
            }
            const currentPathChar = grid[currentRow][currentCol];
            const validDirections = getValidDirections(currentPathChar, lastDirection);
            const currentPosition = [currentRow, currentCol];
            let newPosition;

            for (let [x, y] of validDirections) {
                const newRow = currentRow + y;
                const newCol = currentCol + x;
                const potentialNewPosition = [newRow, newCol];
                const potentialDirection = getInboundDirection(currentPosition, potentialNewPosition);
                if (isValidPosition(potentialNewPosition, potentialDirection, currentPathChar)) {
                    if (newPosition) return false; // can be no ambiguity (only allowed one possible direction)
                    newPosition = potentialNewPosition;
                }
            }

            
            if (!newPosition) return false;
            if (grid[newPosition[0]][newPosition[1]] === X) {
                stepCount++;
                return stepCount === pathCharCount ? true : false;
            }
            
            lastDirection = getInboundDirection(currentPosition, newPosition);
            
            [currentRow, currentCol] = newPosition;
            seen.add(newPosition.toString());
        }
    }

    function getValidDirections(currentPathChar, lastDirection) {
        switch (currentPathChar) {
            case X:
                return [directions.left, directions.right, directions.up, directions.down];
            case CORNER:
                return lastDirection === HORIZONTAL ? [directions.up, directions.down] : [directions.left, directions.right];
            case HORIZONTAL:
                return [directions.left, directions.right];
            case VERTICAL:
                return [directions.up, directions.down];
        }
    }

    function getInboundDirection(currentPosition, newPosition) {
        if (newPosition[0] - 1 === currentPosition[0] || newPosition[0] + 1 === currentPosition[0]) {
            return VERTICAL;
        } else {
            return HORIZONTAL;
        }
    }

    function isValidPosition(newPosition, direction, currentPathChar) {
        const [newRow, newCol] = newPosition;
        if (isOutOfBounds(newRow, newCol)) return false;
        if (seen.has((newPosition).toString())) return false;
        
        const newPathChar = grid[newRow][newCol];

        if (newPathChar === CORNER || newPathChar === X) {
            return true;
        } else if (currentPathChar === X || currentPathChar === CORNER) {
            return direction === HORIZONTAL ? newPathChar === HORIZONTAL : newPathChar === VERTICAL;
        } else if (currentPathChar === HORIZONTAL) {
            return newPathChar === HORIZONTAL;
        } else {
            return newPathChar === VERTICAL;
        }
    }

    function isOutOfBounds(row, col) {
        return row < 0 || row >= height || col < 0 || col >= width;
    }
}

