function removeDuplicates(nums: number[]): number {
    let uniqueNumbers = new Set<number>(nums);

    let i = 0;
    uniqueNumbers.forEach((uniqueNumber: number) => {
        nums[i++] = uniqueNumber;
    });

    return uniqueNumbers.size;
}
