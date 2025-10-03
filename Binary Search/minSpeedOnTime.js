const minSpeedOnTime = (dist, hour) => {
  const check = (speed) => {
    let hoursNeeded = 0;
    for (let i = 0; i < dist.length; i++) {
      const kilometers = dist[i];
      if (i === dist.length - 1) {
        hoursNeeded += kilometers / speed;
      } else {
        hoursNeeded += Math.ceil(kilometers / speed);
      }
    }
    
    return hoursNeeded <= hour;
  };

  if (dist.length > Math.ceil(hour)) return -1;

  let left = 1,
    right = 10 ** 7; // from constraints
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

const dist = [1, 1, 100000],
  hour = 2.01;
console.log(minSpeedOnTime(dist, hour));
