from typing import List


class MaximumUnits:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        boxTypes.sort(key=lambda x: x[1], reverse=True)
        unit_count = 0
        for box_count, units_per_box in boxTypes:
            boxes_taken = min(box_count, truckSize)
            truckSize -= boxes_taken
            unit_count += boxes_taken * units_per_box
            if truckSize == 0:
                break
        return unit_count

    # Time complexity: O(n log n) where n is the number of box types. This is due to the sorting step.
    # Space complexity: O(1) if we ignore the space used for sorting, which can be done in-place. 
    # Otherwise, it would be O(n) due to the space used by the sorting algorithm.