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
  }

  return dp(0);
}

const questions = [
  [3, 2],
  [4, 3],
  [4, 4],
  [2, 5],
];
console.log(mostPoints(questions));