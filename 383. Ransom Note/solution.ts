function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) return false;

    let inThisArray: string[] = magazine.split("");
    for (let i = 0; i < ransomNote.length; i++) {
        let index: number = inThisArray.indexOf(ransomNote.charAt(i));
        if (index > -1) {
            inThisArray.splice(index, 1);
        } else {
            return false;
        }
    }
    return true;
}
