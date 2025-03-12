import java.util.ArrayList;
import java.util.List;

/*Given two sorted (ascending) integer arrays arr1 and arr2, 
return a new array that combines both of them and is also sorted.*/

class CombineSortedArrays {
    public List<Integer> combineSortedArrays (int[] arr1, int[]arr2) {
        List<Integer> combinedArray = new ArrayList<>();
        int i = 0,  j = 0;

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                combinedArray.add(arr1[i]);
                i++;
            } else {
                combinedArray.add(arr2[j]);
                j++;
            }
        }

        while (i < arr1.length) {
            combinedArray.add(arr1[i]);
            i++;
        }

        while (j < arr2.length) {
            combinedArray.add(arr2[j]);
            j++;
        }

        return combinedArray;
    }
}