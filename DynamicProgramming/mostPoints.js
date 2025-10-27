const mostPoints = (questions) => {
  const dp = (i) => {
    if (i >= questions.length) {
      return 0;
    }

    const [points, questionsToSkip] = questions[i];
    return Math.max(points + dp(i + questionsToSkip + 1), dp(i + 1));
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