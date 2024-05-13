const reverseWords = (s: string): string => {
    return s
        .split(" ")
        .map((item: string) => {
            return item.split("").reverse().join("");
        })
        .join(" ");
};
