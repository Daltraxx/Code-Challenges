from collections import deque


class PredictPartyVictory:
    def predict_party_victory(self, senate: str) -> str:
        senateQueue = deque()
        radiant_count = 0
        dire_count = 0
        for char in senate:
            senateQueue.append(char)
            if char == "R":
                radiant_count += 1
            else:
                dire_count += 1

        dire_bans = 0
        radiant_bans = 0

        while radiant_count > 0 and dire_count > 0:
            nextMember = senateQueue.popleft()
            if nextMember == "D":
                if radiant_bans > 0:
                    radiant_bans -= 1
                    dire_count -= 1
                else:
                    dire_bans += 1
                    senateQueue.append(nextMember)
            else:
                if dire_bans > 0:
                    dire_bans -= 1
                    radiant_count -= 1
                else:
                    radiant_bans += 1
                    senateQueue.append(nextMember)

        return "Radiant" if radiant_count > 0 else "Dire"

# Time complexity: O(n) where n is the length of the input string senate. Each senator is processed at most once.
# Space complexity: O(n) in the worst case, if all senators are from the same party, they will all be stored in the queue.