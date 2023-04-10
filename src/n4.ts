const romanChars: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function romanToNumber(s: string) {
    let acc = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "I" && (s[i+1] === "V" || s[i+1] === "X")){
            acc += romanChars[s[i+1]] - 1;
            i++;
        }   else if( s[i] === "X" && (s[i+1] === "L" || s[i+1] === "C")){            
            acc += romanChars[s[i+1]] - 10;
            i++;
        }   else if( s[i] === "C" && (s[i+1] === "D" || s[i+1] === "M")){            
            acc += romanChars[s[i+1]] - 100;
            i++;
        }else{
            acc+=romanChars[s[i]]
        }
    }
    return acc
}


console.log(romanToNumber("XXXIV"))
