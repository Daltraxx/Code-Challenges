const mostPoints = (questions) => {
  const dp = (i) => {
    if (i >= questions.length) {
      return 0;
    }

    return Math.max(questions[i][0] + dp(i + questions[i][1] + 1), dp(i + 1));
  }

  return dp(0);
}

const questions = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
];
console.log(mostPoints(questions));