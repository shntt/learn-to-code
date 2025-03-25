// HashMap
// 2025-3-23

/* 課題
1. HashMapを実装してください
    * set(key, value)
    * get(key) -> Optional(item)
    * remove(key)
    arrayのサイズは1000で
2. HashMapのリバランスを実装してください */

// 未実装
// - MD5を使用したハッシュ関数
//
// まだ試してないこと
// - 複数の要素を同時にセットできる？
// - それぞれの関数の共通の要素を、別の関数にできる？

class MyHashMap {
    arr = Array.from({length: 10});
    set(key, value) {
        let hashedIndex = this.hashFunc(key);
        let loadFactor = this.size() / this.arr.length;

        if (loadFactor >= 0.5) {
            console.log(`Need to rebalence.`);
            this.rebalance();
        }
        
        if (this.arr[hashedIndex] === undefined) {
            this.arr[hashedIndex] = [[key, value]];
            console.log(`${key} added. LF:${loadFactor}(${this.size()}/${this.arr.length})`);
            return;
        }
        
        for (let i = 0; i < this.arr[hashedIndex].length; i++) {
            if (this.arr[hashedIndex][i][0] == key) {
                this.arr[hashedIndex] = [[key, value]];
                console.log(`${key} overwrote. LF:${loadFactor}(${this.size()}/${this.arr.length})`);
                return;
            }
        }

        this.arr[hashedIndex].push([key, value]);
        console.log(`${key} added. LF:${loadFactor}(${this.size()}/${this.arr.length})`);
        return;
    }

    get(key) {
        let hashedIndex = this.hashFunc(key)
        
        if (this.arr[hashedIndex] === undefined) {
            console.log(`${key} does not exist.`);
            return;
        }
        
        for (let i = 0; i < this.arr[hashedIndex].length; i++) {
            if (this.arr[hashedIndex][i][0] == key) {
                console.log(`${key}'s value is ${this.arr[hashedIndex][i][1]}.`);
                return this.arr[hashedIndex][i][1];
            }
        }

        console.log(`${key} does not exist.`);
        return;
    }

    has(key) {
        let hashedIndex = this.hashFunc(key);
        
        if (this.arr[hashedIndex] === undefined) {
            console.log(`${key} does not exist.`)
            return false;
        }
        
        for (let i = 0; i < this.arr[hashedIndex].length; i++) {
            if (this.arr[hashedIndex][i][0] == key) {
                console.log(`${key} exists.`)
                return true;
            }
        }

        console.log(`${key} does not exist.`)
        return false;
    }

    remove(key) {
        let hashedIndex = this.hashFunc(key);
        
        if (this.arr[hashedIndex] === undefined) {
            this.arr[hashedIndex] = [[key, value]];
            console.log(`${key} does not exist.`);
            return false;
        }
        
        for (let i = 0; i < this.arr[hashedIndex].length; i++) {
            if (this.arr[hashedIndex][i][0] == key) {
                this.arr[hashedIndex].splice(i, 1);
                console.log(`${key} successfully removed.`);
                return true;
            }
        }

        console.log(`${key} does not exist.`);
        return false;
    }

    clear() {
        this.arr = Array.from({length: 10});
        return;
    }

    size() {
        let counter = 0;

        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] !== undefined) {
                counter += this.arr[i].length;
            }
        }

        return counter;
    }

    rebalance() {
        let tempArr = this.arr;
        this.arr = Array.from({length: this.arr.length * 2});

        console.log(`Current array duplicated(${tempArr.length}):[${tempArr}]`);
        console.log(`New empty array generated(${this.arr.length}): [${this.arr}]`);

        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i] !== undefined) {
                for (let j = 0; j < tempArr[i].length; j++) {
                    this.set(tempArr[i][j][0], tempArr[i][j][1]);
                }
            }
        }

        console.log(`Rebalance completed.`);
        console.log(`New arrray(${this.arr.length}): [${this.arr}]`);
    }

    hashFunc(key) {
        let hashedKey = key.length;

        // MD5を使う(以下は仮にlengthを使っている)

        return Number.parseInt(`${hashedKey}`);
    }
}

const myMap = new MyHashMap();

myMap.set("Apple", 499);
myMap.set("Egg", 4990);
myMap.set("Grape", 500);
myMap.set("Apple", 899);
myMap.set("Orange", 799);
myMap.set("Bread", 799);
myMap.set("Grape", 500);
myMap.set("Melon", 1990);
myMap.set("Meat", 1290);
myMap.set("Rice", 3990);
myMap.set("Potato", 590);

let testWord = "Apple";
console.log(`[${myMap.arr}]`);
myMap.get(testWord);
myMap.has(testWord);

console.log(`[${myMap.arr}]`);
console.log(`myMap has ${myMap.size()} elements.`);

myMap.remove(testWord);
console.log(`[${myMap.arr}]`);
console.log(`myMap has ${myMap.size()} elements.`);

myMap.clear();
console.log(`[${myMap.arr}]`);
console.log(`myMap has ${myMap.size()} elements.`);
