import java.util.Arrays;

public class NumRescueBoats {
    public int numRescueBoats(int[] people, int limit) {
        int boats = 0;
        int left = 0;
        int right = people.length - 1;
        Arrays.sort(people);

        while (left <= right) {
            if (people[left] + people[right] <= limit) {
                left++;
            }
            // Heaviest person always goes on a boat,
            // so we move the right pointer
            // regardless of whether we can fit the lightest person with them or not.
            right--;
            boats++;
        }

        return boats;
    }
}

// Time complexity: O(n log n) due to sorting the array of people.
// Space complexity: O(1) since we sort the array in place.