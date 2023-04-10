function fn(words: string[]) {
    const out: string[] = [];
    const chars: { [key: string]: string[] } = {};
    for (const word of words) {
        for (const char of word) {
            if (chars[char]) chars[char].push(char);
            else chars[char] = [char];

            if (chars[char].length == words.length) {
                out.push(char);
                chars[char] = [];
            }
        }
    }
    return out;
}

console.log(fn(["bella", "label", "roller"]), ["e", "l", "l"]);
console.log(fn(["cool", "lock", "cook"]), ["c", "o"]);
