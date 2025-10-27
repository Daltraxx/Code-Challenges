// TOP-DOWN
const mostPoints = (questions) => {
  const memo = new Array(questions.length);
  const dp = (i) => {
    if (i >= questions.length) {
      return 0;
    }

    if (memo[i] !== undefined) {
      return memo[i];
    }

    const [points, questionsToSkip] = questions[i];
    memo[i] = Math.max(points + dp(i + questionsToSkip + 1), dp(i + 1));
    return memo[i];
  };

  return dp(0);
};

const questions = [
  [3, 2],
  [4, 3],
  [4, 4],
  [2, 5],
];
console.log(mostPoints(questions));

// BOTTOM-UP
const mostPointsBottomUp = (questions) => {
  const n = questions.length;
  const dp = new Array(n + 1).fill(0); // n + 1 to avoid out of bounds
  for (let i = n - 1; i >= 0; i--) {
    const [points, questionsToSkip] = questions[i];
    let nextAnswerableQuestion = i + questionsToSkip + 1;
    dp[i] = Math.max(
      points + dp[Math.min(nextAnswerableQuestion, n)], // make sure don't go over n
      dp[i + 1]
    );
  }

  return dp[0];
};

console.log(mostPointsBottomUp(questions));
