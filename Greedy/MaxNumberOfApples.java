import java.util.Arrays;

public class MaxNumberOfApples {
  public int maxNumberOfApples(int[] weight) {
    int MAX_WEIGHT = 5000;
    int[] sortedWeights = weight.clone();
    Arrays.sort(sortedWeights);
    int appleCount = 0;
    int currentWeight = 0;
    for (int i = 0; i < sortedWeights.length; i++) {
      int appleWeight = sortedWeights[i];
      if (currentWeight + appleWeight > MAX_WEIGHT)
        return appleCount;
      
      currentWeight += appleWeight;
      appleCount++;
    }

    return appleCount;
  }
}

// time complexity of O(nlogn)
// linear space, constant if sorted in place