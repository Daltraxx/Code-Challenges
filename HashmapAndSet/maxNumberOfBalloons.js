const maxNumberOfBalloons = (text) => {
  const getIndex = (char) => {
    return char.charCodeAt(0) - 97;
  };
  const freq = new Array(26).fill(0);
  for (const char of text) {
    const i = getIndex(char);
    freq[i]++;
  }
  return Math.min(
    freq[getIndex("b")],
    freq[getIndex("a")],
    Math.floor(freq[getIndex("l")] / 2),
    Math.floor(freq[getIndex("o")] / 2),
    freq[getIndex("n")],
  );
};
