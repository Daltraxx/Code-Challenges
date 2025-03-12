/*You are given an array of variable pairs equations and an array of real numbers values, 
where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. 
Each Ai or Bi is a string that represents a single variable.

You are also given some queries, 
where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

Return the answers to all queries. 
If a single answer cannot be determined, return -1.0.

Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them. */

const calcEquation = (equations, values, queries) => {
    const answerQuery = (start, end) => {
        if (!graph.has(start) || !graph.has(end)) {
            return -1;
        }

        const seen = new Set([start]);
        const stack = [[start, 1]];

        while (stack.length) {
            let [node, ratio] = stack.pop();

            if (node === end) {
                return ratio;
            }
            
            for (let [neighbor, weight] of graph.get(node)) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    stack.push([neighbor, weight * ratio]);
                }
            }
            
        }

        return -1;
    }

    const graph = new Map();

    for (let i = 0; i < equations.length; i++) {
        let [numerator, denominator] = equations[i];

        if (!graph.has(numerator)) graph.set(numerator, new Map());
        if (!graph.has(denominator)) graph.set(denominator, new Map());

        graph.get(numerator).set(denominator, values[i]);
        graph.get(denominator).set(numerator, 1 / values[i]);
    }

    const answers = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
        const start = queries[i][0], end = queries[i][1];
        answers[i] = answerQuery(start, end);
    }

    return answers;
}

const calcEquationRecursive = (equations, values, queries) => {
    const answerQuery = (start, end, ratio) => {
        if (!graph.has(start)) {
            return -1;
        }

        if (start === end) {
            return ratio;
        }

        for (let [neighbor, weight] of graph.get(start)) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                const search = answerQuery(neighbor, end, ratio * weight);
                if (search !== -1) {
                    return search;
                }
            }
        }

        return -1;
    }

    const graph = new Map();

    for (let i = 0; i < equations.length; i++) {
        let [numerator, denominator] = equations[i];

        if (!graph.has(numerator)) graph.set(numerator, new Map());
        if (!graph.has(denominator)) graph.set(denominator, new Map());

        graph.get(numerator).set(denominator, values[i]);
        graph.get(denominator).set(numerator, 1 / values[i]);
    }

    let seen = new Set();

    const answers = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
        const start = queries[i][0], end = queries[i][1];
        seen.add(start);
        answers[i] = answerQuery(start, end, 1);
        seen = new Set();
    }

    return answers;
}