/*
In the world of Dota2, there are two parties: the Radiant and the Dire.

The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise one of the two rights:

Ban one senator's right: A senator can make another senator lose all his rights in this and all the following rounds.
Announce the victory: If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and decide on the change in the game.
Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party and the Dire party. Then if there are n senators, the size of the given string will be n.

The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.

Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be "Radiant" or "Dire".
*/

import java.util.ArrayDeque;
import java.util.Deque;

public class PredictPartyVictory {
    public String predictPartyVictory(String senate) {
        int radiantCount = 0;
        int direCount = 0;

        Deque<Character> queue = new ArrayDeque<>();
        // add members to queue in order and track count of each party's members
        for (char member : senate.toCharArray()) {
            queue.addLast(member);

            if (member == 'R') {
                radiantCount++;
            } else {
                direCount++;
            }
        }

        int radiantPendingBan = 0; // pending bans of Dire members
        int direPendingBan = 0; // pending bans of Radiant members

        while (radiantCount > 0 && direCount > 0) {
            char currentMember = queue.removeFirst();
            if (currentMember == 'R') {
                if (direPendingBan > 0) {
                    direPendingBan--;
                    radiantCount--;
                } else {
                    radiantPendingBan++;
                    queue.addLast(currentMember);
                }
            } else {
                if (radiantPendingBan > 0) {
                    radiantPendingBan--;
                    direCount--;
                } else {
                    direPendingBan++;
                    queue.addLast(currentMember);
                }

            }
        }

        // Winning party is one with remaining voters
        return radiantCount > 0 ? "Radiant" : "Dire";
    }

}
