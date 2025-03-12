/*Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
Jaden is also known for some of his philosophy that he delivers via Twitter. 
When writing on Twitter, he is known for almost always capitalizing every word. 
For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith.*/

// first attempt, maybe faster than next
Object.defineProperty(String.prototype, 'toJadenCase', { 
    value: function toJadenCase() {
        const stringArray = this.split('');
        let space = true;
        for (let i = 0; i < stringArray.length; i++) {
            if (stringArray[i] === ' ') {
                space = true;
                continue;
            }

            if (space) {
                stringArray[i] = stringArray[i].toUpperCase();
                space = false;
            }

        }

        return stringArray.join('');
    }
});

// second attempt, more concise but possibly slower
Object.defineProperty(String.prototype, 'toJadenCase', { 
    value: function toJadenCase() {
        let wordArray = this.split(' ');
        wordArray = wordArray.map((word) => word[0].toUpperCase() + word.slice(1));
        return wordArray.join(' ');
    }
});