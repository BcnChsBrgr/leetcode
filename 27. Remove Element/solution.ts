function removeElement(nums: number[], val: number): number {
    let unique: number[] = [];

    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            unique.push(nums[i]);
        }
    }

    unique.forEach((uniqueNumber: number, index: number) => {
        nums[index] = uniqueNumber;
    });

    return unique.length;
}
