function fizzBuzz(x: number){
    if(x % 15 === 0) return "FizzBuzz"
    if(x % 3 === 0) return "Fizz"
    if(x % 5 === 0) return "Buzz"
}

for(let i = 1; i < 100; i++)
    console.log(fizzBuzz(i) || i)