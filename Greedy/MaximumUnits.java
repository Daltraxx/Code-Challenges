import java.util.Arrays;

public class MaximumUnits {
  public int maximumUnits(int[][] boxTypes, int truckSize) {
    int maxUnits = 0;

    // Sort the box types by the number of units per box in descending order
    int[][] sortedBoxTypes = Arrays.copyOf(boxTypes, boxTypes.length);
    Arrays.sort(sortedBoxTypes, (a, b) -> Integer.compare(b[1], a[1]));

    for (int[] boxType : sortedBoxTypes) {
      int numberOfBoxes = boxType[0];
      int unitsPerBox = boxType[1];

      // Calculate how many boxes we can take from this type
      int boxesToTake = Math.min(numberOfBoxes, truckSize);
      maxUnits += boxesToTake * unitsPerBox;
      truckSize -= boxesToTake;

      // If the truck is full, break out of the loop
      if (truckSize == 0) {
        break;
      }
    }

    return maxUnits;
  }
}

// Time Complexity: O(n log n) due to sorting the box types.
// Space Complexity: O(n) for the sorted array of box types.
