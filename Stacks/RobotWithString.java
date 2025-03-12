package Stacks;
import java.util.Stack;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
/*You are given a string s and a robot that currently holds an empty string t. Apply one of the following operations until s and t are both empty:

Remove the first character of a string s and give it to the robot. The robot will append this character to the string t.
Remove the last character of a string t and give it to the robot. The robot will write this character on paper.
Return the lexicographically smallest string that can be written on the paper. 

s consists of only English lowercase letters.*/



public class RobotWithString {
    public static String robotWithString1(String s) {
        int[] charCount = new int[26];
        Stack<Character> t = new Stack<>();
        StringBuilder paper = new StringBuilder();

        //build map of character frequencies
        for (int i = 0; i < s.length(); i++) {
            charCount[(int) s.charAt(i) - 97]++;
        }

        for (int i = 0; i < s.length(); i++) {
            t.push(s.charAt(i));
            charCount[(int) s.charAt(i) - 97]--;
            //see if there is a character lexigraphically smaller than one available to write from t
            while (!t.isEmpty()) {
                boolean find = false;
                for (int j = 0; j < (int) t.peek() - 97; j++) {
                    String currentChar = Character.toString(j + 97);
                    if (charCount[j] > 0 && currentChar.charAt(0) < t.peek()) {
                        //if found, stop loop and set find to true
                        find = true;
                        break;
                    }
                }

                if (find) {
                    //continue searching with next letter in s
                    break;
                } else {
                    //if no lexigraphically smaller character found, write end of t to paper
                    paper.append(t.pop());
                }
            }
            
        }

        return paper.toString();
    }

    public static String robotWithString2(String s) {
        StringBuilder paper = new StringBuilder();
        Stack<Character> t = new Stack<>();
        char[] sCharArray = s.toCharArray();

        Map<Character, Integer> charIndexMap = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            charIndexMap.put(sCharArray[i], i);
        }
        Arrays.sort(sCharArray);

        int curr = -1;
        int i = 0;
        while (i < s.length()) {
            char currChar = sCharArray[i];
            if (charIndexMap.get(currChar) > curr) {
                while (!t.isEmpty() && t.peek() <= currChar) {
                    paper.append(t.pop());
                }
                paper.append(currChar);

                for (int j = curr + 1; j < charIndexMap.get(currChar); j++) {
                    if (s.charAt(j) == currChar) {
                        paper.append(currChar);
                        i++;
                    } else {
                        t.push(s.charAt(j));
                    }
                }

                curr = charIndexMap.get(currChar);
            }
            i++;
        }

        while (!t.isEmpty()) {
            paper.append(t.pop());
        }

        return paper.toString();
    }
    public static void main(String[] args) {
        String s = "bdda";
        System.out.println(robotWithString2(s));
    }

}