/*
In the world of Dota2, there are two parties: the Radiant and the Dire.

The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise one of the two rights:

Ban one senator's right: A senator can make another senator lose all his rights in this and all the following rounds.
Announce the victory: If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and decide on the change in the game.
Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party and the Dire party. Then if there are n senators, the size of the given string will be n.

The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.

Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be "Radiant" or "Dire".
*/

import java.util.LinkedList;
import java.util.Queue;

public class Dota2Senate {
    public String predictPartyVictoryTwoQueues(String senate) {
        int n = senate.length();

        Queue<Integer> radiantQueue = new LinkedList<>();
        Queue<Integer> direQueue = new LinkedList<>();

        char radiant = 'R';
        //char dire = 'D';

        //fill both queue's with the indices of their respective party members
        for (int i = 0; i < n; i++) {
            if (senate.charAt(i) == radiant) {
                radiantQueue.add(i);
            } else {
                direQueue.add(i);
            }
        }

        while (!radiantQueue.isEmpty() && !direQueue.isEmpty()) {
            //remove next members of each party from queues and store their index to determine who will do banning
            int nextRadiant = radiantQueue.poll();
            int nextDire = direQueue.poll();

            //party with smaller indice gets to ban the next member of opposite party
            //place remaining member back in party's queue with the indice of their next turn
            if (nextRadiant < nextDire) {
                radiantQueue.add(nextRadiant + n);
            } else {
                direQueue.add(nextDire + n);
            }
        }

        //party with remaining unbanned members is winner
        return !radiantQueue.isEmpty() ? "Radiant" : "Dire";
                
    }

    public String predictPartyVictoryOneQueue(String senate) {
        int radiantCount = 0, direCount = 0;

        int radiantFloatingBan = 0, direFloatingBan = 0;

        Queue<Character> queue = new LinkedList<>();
        //add members to queue in order and track count of each party's members
        for (char member : senate.toCharArray()) {
            queue.add(member);

            if (member == 'R') radiantCount++;
            else direCount++;
        }

    
        while (radiantCount > 0 && direCount > 0) {
            char currentMember = queue.poll();

            //if current member is able to vote, will ban next member of opposite party (store vote in floatingBan variable)
            //before being added back to queue.
            //if cannot vote (is banned) do not add back to queue and decrease remaining voters for that party
            if (currentMember == 'R') {
                if (radiantFloatingBan == 0) {
                    direFloatingBan++;
                    queue.add('R');
                } else {
                    radiantFloatingBan--;
                    radiantCount--;
                }
            } else {
                if (direFloatingBan == 0) {
                    radiantFloatingBan++;
                    queue.add('D');
                } else {
                    direFloatingBan--;
                    direCount--;
                }
            }
        }
        
        //winning party is one with remaining voters
        return radiantCount > 0 ? "Radiant" : "Dire";
    }

}
