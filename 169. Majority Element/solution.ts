function majorityElement(nums: number[]): number {
    let shouldMoreThan: number = nums.length / 2;
    let trackMap = new Map<string, number>();
    for (let i: number = 0; i < nums.length; i++) {
        let tmp: number = trackMap.has(`${nums[i]}`)
            ? trackMap.get(`${nums[i]}`)
            : 0;
        trackMap.set(`${nums[i]}`, ++tmp);

        if (tmp > shouldMoreThan) {
            return nums[i];
        }
    }
    return -1;
}
