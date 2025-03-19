// 1から100までの要素を持つ配列をつくり、FizzかBuzzか調べる
// 2025-3-18

let arr = [];
let numberOfElements = 100;

// 空の配列に、1から指定した数まで、要素を追加する関数
function createArr(num) {
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
}

// 配列の要素を確認し、fizz、buzz、fizzbuzz、あるいは数値自体を返す関数
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