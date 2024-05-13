function removeDuplicates(nums: number[]): number {
    let index: number = 2;
    for (let j = 2; j < nums.length; j++) {
        // because it is a sorted array
        // you only need to compare the current one with the prevous one
        // [i] and [n-2]
        if (nums[j] > nums[index - 2]) {
            nums[index++] = nums[j];
        }
    }
    return index;
}
