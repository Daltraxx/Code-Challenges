const combine = (n, k) => {
  const combinations = [];

  const backtrack = (curr, i) => {
    if ((curr.length = k)) {
      combinations.push([...curr]);
      return;
    }

    for (i; i <= n; i++) {
      curr.push(i);
      backtrack(curr, i + 1);
      curr.pop();
    }
  };

  backtrack([], 1);
  return combinations;
};
