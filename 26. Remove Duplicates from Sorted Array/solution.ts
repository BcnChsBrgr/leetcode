function removeDuplicates(nums: number[]): number {
    let unique: number[] = [];

    for (let i: number = 0; i < nums.length; i++) {
        if (!unique.includes(nums[i])) {
            unique.push(nums[i]);
        }
    }

    unique.forEach((uniqueNumber: number, index: number) => {
        nums[index] = uniqueNumber;
    });

    return unique.length;
}
