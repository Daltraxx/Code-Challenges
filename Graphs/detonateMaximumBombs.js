/*You are given a list of bombs. 
The range of a bomb is defined as the area where its effect can be felt. 
This area is in the shape of a circle with the center as the location of the bomb.

The bombs are represented by a 0-indexed 2D integer array bombs where bombs[i] = [xi, yi, ri]. 
xi and yi denote the X-coordinate and Y-coordinate of the location of the ith bomb, 
whereas ri denotes the radius of its range.

You may choose to detonate a single bomb. When a bomb is detonated, it will detonate all bombs that lie in its range. 
These bombs will further detonate the bombs that lie in their ranges.

Given the list of bombs, 
return the maximum number of bombs that can be detonated if you are allowed to detonate only one bomb.*/

const maximumDetonation = (bombs) => {
    const setEdges = (bomb1, bomb2) => {
        const [x1, y1, r1] = bombs[bomb1];
        const [x2, y2, r2] = bombs[bomb2];

        const distance = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);

        if (r1 >= distance) graph.get(bomb1).push(bomb2);
        if (r2 >= distance) graph.get(bomb2).push(bomb1);
    }

    const getDetonations = (bomb) => {
        let detonations = 1

        for (let neighbor of graph.get(bomb)) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                detonations += getDetonations(neighbor);
            }
        }

        return detonations;
    }

    const graph = new Map();
    for (let bomb = 0; bomb < bombs.length; bomb++) {
        graph.set(bomb, []);
    }

    for (let i = 0; i < bombs.length; i++) {
        for (let j = i + 1; j < bombs.length; j++) {
            setEdges(i, j);
        }
    }

    let seen = new Set();
    let maxDetonations = 0;
    for (let bomb = 0; bomb < bombs.length; bomb++) {
        seen.add(bomb);
        maxDetonations = Math.max(getDetonations(bomb), maxDetonations);
        seen = new Set();
    }

    return maxDetonations
}

const bombs = [[2,1,3],[6,1,4]];
maximumDetonation(bombs);