/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    let needToRotate = k % nums.length;
    
    for (let i = 0 ; i < needToRotate ; i++) {
        nums.unshift(nums.pop());
    }
};