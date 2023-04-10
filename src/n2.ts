function sort(a: number[], b: number[]): number[] {
    const arr = [];
    for (const i in a) {
        arr.push({ value: a[i], weight: b[i] || Infinity });
    }
    arr.sort((a,b) => a.weight - b.weight)

    return arr.map(el=>el.value)
}

console.log(sort([1,4,6], [11,33,22]))
