package CodeWars;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PickPeaks {
    
    public static Map<String,List<Integer>> getPeaks(int[] arr) {
        HashMap<String, List<Integer>> map = new HashMap<>();
        map.put("pos", new ArrayList<>());
        map.put("peaks", new ArrayList<>());

        for (int i = 1; i < arr.length - 1; i++) {
            if (arr[i] > arr[i - 1]) {
                int right = i + 1;
                while (arr[i] == arr[right] && right < arr.length - 1) {
                    right++;
                }

                if (arr[i] > arr[right]) {
                    map.get("pos").add(i);
                    map.get("peaks").add(arr[i]);
                    i = right;
                } else {
                    i = right - 1;
                }
            }
        }

        return map;
    }
}