function fn(words: string[]) {
    const out: string[] = [];
    const tmpWords: string[] = [...words]
    for (let i = 0; i < tmpWords[0].length; i += 1){
        let count: number = 1;
        for (let j = 1; j < tmpWords.length; j += 1){
            const tempReg = new RegExp(tmpWords[0][i]);
            const findLetter = tmpWords[j].match(tempReg);
            if (findLetter){
                const newWord: string[] = tmpWords[j].split("");
                if(findLetter.index)
                newWord.splice(findLetter.index, 1);
                tmpWords[j] = newWord.join("");
                count += 1;
            }
        }
        if (count === words.length) out.push(tmpWords[0][i]);
    }
    return out;
}

console.log(fn(["bellal", "label", "roller"]), ["e", "l", "l"]);
console.log(fn(["cool", "lock", "cook"]), ["c", "o"]);
