let arr = [];
let numberOfElements = 100;

function createArr(num) {
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
}

function fizzbuzz() {
    for (const i of arr) {
        if (i % 15 == 0) {
            console.log("FizzBuzz!")
        } else if (i % 3 == 0) {
            console.log("Fizz!");
        } else if (i % 5 == 0) {
            console.log("Buzz!")
        } else {
            console.log(i);
        }
    };
}

createArr(numberOfElements);
fizzbuzz();