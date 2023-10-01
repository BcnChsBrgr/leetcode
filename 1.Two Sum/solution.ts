function twoSum(nums: number[], target: number): number[] {
    let remainderResults = {}; // create a set of remains and index

    for (let index = 0; index < nums.length; index++) {
        let remains = target - nums[index];

        if (remainderResults.hasOwnProperty(remains)) {
            return [remainderResults[remains], index];
        }

        remainderResults[nums[index]] = index;
    }
    return [-1, -1];
}
