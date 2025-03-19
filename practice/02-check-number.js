// 任意の数値を与えて、FizzかBuzzかFizz Buzzを返す関数をつくる
// 2025-3-18

// 空の配列に、1から指定した数まで、要素を追加する関数
function createArr(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}

// 配列の要素を一つずつ処理して、コンソールに出力する関数
function checkElementInArr(arr) {
    for (const i of arr) {
        console.log(checkNumber(i));
    };
}

// 任意の数値を与えて、FizzかBuzzかFizz Buzzを返す関数
function checkNumber(num) {
    if (num % 3 == 0 || num % 5 == 0) {
        if (num % 5 != 0) {
            return "Fizz!";
        } else if (num % 3 != 0){
            return "Buzz!";
        } else {
            return "Fizz Buzz!!";
        }
    } else {
        return num;
    }
}

let numberOfElements = 100;
checkElementInArr(createArr(numberOfElements));