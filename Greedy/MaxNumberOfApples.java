import java.util.Arrays;

public class MaxNumberOfApples {
  public int maxNumberOfApples(int[] weight) {
    int MAX_WEIGHT = 5000;
    Arrays.sort(weight);
    int appleCount = 0;
    int currentWeight = 0;
    for (int i = 0; i < weight.length; i++) {
      int appleWeight = weight[i];
      if (currentWeight + appleWeight > MAX_WEIGHT)
        return appleCount;
      
      currentWeight += appleWeight;
      appleCount++;
    }

    return appleCount;
  }
}
