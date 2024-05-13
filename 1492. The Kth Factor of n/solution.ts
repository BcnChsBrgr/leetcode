function kthFactor(n: number, k: number): number {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            if (k === ++count) {
                return i;
            }
        }
    }

    return -1;
}
