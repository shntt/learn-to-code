// HashMap
// 2025-3-23
/* 
1. HashMapを実装する
    * set(key, value)
    * get(key) -> Optional(item)
    * remove(key)
    arrayのサイズは1000で
2. HashMapのリバランスを実装する */

const crypto = require('crypto');

class HashMapItem {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class MyHashMap {
    constructor(size = 1000) {
        this.arr = Array.from({length: size}, () => []);
    }

    hashFunc(input) {
        const hash = crypto.createHash('md5');
        hash.update(input);
        const hashHex = hash.digest('hex');
        const hashNum = parseInt(hashHex.slice(0, 8), 16);
        return hashNum % this.arr.length;
    }

    set(key, value) {
        let elementOfArray = new HashMapItem(key, value);
        let loadFactor = this.size() / this.arr.length;

        if (loadFactor >= 0.75) {
            this.rebalance();
        }

        let hashedArray = this.arr[this.hashFunc(key)];

        if (hashedArray.length === 0) {
            this.arr[this.hashFunc(key)] = [elementOfArray];
            return;
        }

        for (const item of hashedArray) {
            if (item.key == key) {
                item.value = value;
                return;
            }
        }

        hashedArray.push(elementOfArray);
        return;
    }

    findItem(key) {
        let hashedArray = this.arr[this.hashFunc(key)];

        if (hashedArray.length === 0) {
            return undefined;
        }

        for (const item of hashedArray) {
            if (item.key == key) {
                return item;
            }
        }

        return undefined;
    }
    
    get(key) {
        let item = this.findItem(key);
        return item ? item.value : undefined;
    }

    has(key) {
        return this.findItem(key) !== undefined;
    }

    remove(key) {
        let hashedArray = this.arr[this.hashFunc(key)];

        if (hashedArray.length === 0) {
            return false;
        }

        for (let i = 0; i < hashedArray.length; i++) {
            if (hashedArray[i].key == key) {
                hashedArray.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    clear() {
        this.arr = Array.from({length: this.size}, () => []);
        return;
    }

    size() {
        let counter = 0;

        for (let item of this.arr) {
            if (item.length !== 0) {
                counter += item.length;
            }
        }

        return counter;
    }

    rebalance() {
        let tempArray = this.arr;
        this.arr = Array.from({ length: this.arr.length * 2 }, () => []);

        for (let items of tempArray) {
            if (items !== undefined) {
                for (let item of items) {
                    this.set(item.key, item.value);
                }
            }
        }

        return;
    }
}

const myMap = new MyHashMap();

myMap.set("Apple", 499);
myMap.set("Egg", 4990);
myMap.set("Grape", 500);
myMap.set("Orange", 799);
myMap.set("Bread", 799);
myMap.set("Grape", 500);
myMap.set("Melon", 1990);
myMap.set("Meat", 1290);
myMap.set("Rice", 3990);
myMap.set("Potato", 590);
myMap.set("Potaty", 590);
myMap.set("Asparagus", 590);
myMap.set("Apple", 899);

let testWord = "Apple";

console.log(myMap.get(testWord));
console.log(myMap.has(testWord));
console.log(myMap.remove(testWord));
console.log(myMap.has(testWord));
console.log(myMap.size());
myMap.clear();
console.log(myMap.size());