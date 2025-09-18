const maximum69Number = (num) => {
  num = String(num);
  const firstSix = num.indexOf("6");

  if (firstSix !== -1) {
    num = num.slice(0, firstSix) + "9" + num.slice(firstSix + 1);
  }

  return Number(num);
};

console.log(maximum69Number(9969));
