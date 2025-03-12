/*A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
Trie, also known as prefix tree, is a tree-like data structure which is often used to store strings. 
The key advantage of trie is its efficient search time, which can be achieved in O(n) time where n is the length of the array. 
Trie works by storing each element of the array in a separate node, and each node has an array of children representing the possible characters that can follow the current element.

Implement the Trie class:

-Trie() Initializes the trie object.
-void insert(String word) Inserts the string word into the trie.
-boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
-boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.*/

class TrieNode  {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            if (!(char in current.children)) {
                current.children[char] = new TrieNode();
            }

            current = current.children[char];
        }

        current.endOfWord = true;
    }

    search(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!(char in current.children)) {
                return false;
            }

            current = current.children[char]
        }

        return current.endOfWord;
    }

    startsWith(prefix) {
        let current = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];
            if (!(char in current.children)) {
                return false;
            }

            current = current.children[char];
        }

        return true;
    }

}

//Time complexity : O(m)

//testing

const obj = new Trie();

obj.insert('leet');
console.log(obj.root.children);

const param2 = obj.search('leet');
console.log(param2);

const param3 = obj.startsWith('le');
console.log(param3);