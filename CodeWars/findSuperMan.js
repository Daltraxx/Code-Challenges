function findSuperMan(s) {
    const superman = 'superman';
    let forwardSuper = 0, reverseSuper = superman.length - 1;
    let forwardS = 0, reverseS = 0;
    while (forwardS < s.length || reverseS < s.length) {
        if (forwardS < s.length) {
            const currForwardS = s[forwardS].toLowerCase();
            if (currForwardS === superman[forwardSuper]) {
                forwardSuper++;
                forwardS += 2;
            } else {
                forwardS++;
            }
        }
        if (reverseS < s.length) {
            const currReverseS = s[reverseS].toLowerCase();
            if (currReverseS === superman[reverseSuper]) {
                reverseSuper--;
                reverseS += 2;
            } else {
                reverseS++;
            }
        }

        if (forwardSuper === superman.length || reverseSuper < 0) {
            return "Hi, SuperMan!";
        }
    }

    return 'Are you crazy?';
}

const s = "j  lhnlqoawbt bmi khvr t ozcevcpdlyqus";
console.log(findSuperMan(s));