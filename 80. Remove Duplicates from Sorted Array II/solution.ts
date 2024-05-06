function removeDuplicates(nums: number[]): number {
    let index: number = 2;
    for (let j = 2; j < nums.length; j++) {
        if (nums[j] > nums[index - 2]) {
            nums[index++] = nums[j];
        }
    }
    return index;
}
