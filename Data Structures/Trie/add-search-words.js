/*Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

- WordDictionary() Initializes the object.
- void addWord(word) Adds word to the data structure, it can be matched later.
- bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. 
word may contain dots '.' where dots can be matched with any letter.*/

class WordDictionaryNode  {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new WordDictionaryNode();
    }

    addWord(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            if (!(char in current.children)) {
                current.children[char] = new WordDictionaryNode();
            }

            current = current.children[char];
        }

        current.endOfWord = true;
    }

    searchInNode(word, node) {
        //returns true if word in node
        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            if (!(char in node.children)) {
                // If the current character is '.'
                // check all possible nodes from this level
                if (char === '.') {
                    for (const key in node.children) {
                        let child = node.children[key];
                        if (this.searchInNode(word.slice(i + 1), child)) {
                            return true;
                        }
                    }
                }

                // If no nodes lead to answer
                // or the current character != '.'
                return false;
            } else {
                 // If the character is found
                // go down to the next level in trie
                node = node.children[char];
            }

            
        }
        
        return node.endOfWord;
    }

    search(word) {
        //console.log(word);
        return this.searchInNode(word, this.root);
    }

}


//testing

let wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True
