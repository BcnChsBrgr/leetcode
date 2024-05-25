function isPalindrome(s: string): boolean {
    let array = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0,
        right = array.length;

    right--;

    do {
        if (array[left] === array[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    } while (left < right);
    return true;
}
