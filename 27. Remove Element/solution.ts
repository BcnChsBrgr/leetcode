function removeElement(nums: number[], val: number): number {
    let startPos: number = 0,
        endPos: number = nums.length - 1;
    let retNum: number = nums.length;

    while (startPos <= endPos) {
        if (nums[startPos] === val) {
            if (nums[endPos] === val) {
                endPos--;
                retNum--;
                continue;
            } else {
                nums[startPos] = nums[endPos];
                nums[endPos] = -1;
                endPos--;
                retNum--;
            }
        }
        startPos++;
    }
    return retNum;
}
const nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3));
