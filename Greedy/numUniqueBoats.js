const numUniqueBoats = (people, limit) => {
  const peopleSorted = people.toSorted((a, b) => a - b);
  let peopleRequired = people.length;
  let boatsNeeded = 0;
  let i = 0, j = peopleSorted.length - 1;
  while (peopleRequired > 0) {
    const heavyPerson = peopleSorted[j];
    const lightPerson = peopleSorted[i];
    if (heavyPerson + lightPerson <= limit) {
      peopleRequired -= 2;
      i++;
      j--;
    } else {
      peopleRequired--;
      j--;
    }

    boatsNeeded++;
  }

  return boatsNeeded;
}

const people = [3, 2, 2, 1],
  limit = 3;

console.log(numUniqueBoats(people, limit));