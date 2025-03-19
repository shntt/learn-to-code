// ランダムで生成した自然数N(N <= 10000)を与えて結果を表示する
// 2025-3-19

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

// ランダムで自然数N(N <= 10000)を生成する関数
function createNaturalNumber() {
    let result = Math.floor(Math.random() * 10000) + 1;
    return result;
}

// ランダムで生成した自然数N(N <= 10000)を与えて結果を表示する
createNaturalNumber()
checkNumber(createNaturalNumber())