function kthFactor(n: number, k: number): number {
    if (k === 1) return 1;
    let index: number = 0;
    for (let i = 0; i < n; i++) {
        if (n % i == 0) {
            index += 1;
        }
        if (index === k) return i;
    }
    return -1;
}
