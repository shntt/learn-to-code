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
        this.arr = Array.from({ length: size }, () => []);
        this.initialSize = size;
        this.amountOfItems = 0;
        this.loadFactorThreshold = 0.75
    }

    hashFunc(input) {
        const hash = crypto.createHash('md5');
        hash.update(input);
        const hashHex = hash.digest('hex');
        const hashNum = parseInt(hashHex.slice(0, 8), 16);
        return hashNum % this.arr.length;
    }

    set(key, value) {
        let item = new HashMapItem(key, value);
        let hashArray = this.arr[this.hashFunc(key)];

        for (let i = 0; i < hashArray.length; i++) {
            if (hashArray[i].key === key) {
                hashArray[i] = item;
                return;
            }
        }

        hashArray.push(item);
        this.amountOfItems += 1;

        if (this.size() / this.arr.length >= this.loadFactorThreshold) {
            this.rebalance();
        }
    }

    get(key) {
        const hashArray = this.arr[this.hashFunc(key)];

        if (hashArray.length === 0) {
            return undefined;
        }

        for (const item of hashArray) {
            if (item.key === key) {
                return item.value;
            }
        }

        return undefined;
    }

    has(key) {
        return this.get(key) !== undefined;
    }

    remove(key) {
        const hashArray = this.arr[this.hashFunc(key)];

        if (hashArray.length === 0) {
            return false;
        }

        for (let i = 0; i < hashArray.length; i++) {
            if (hashArray[i].key === key) {
                hashArray.splice(i, 1);
                this.amountOfItems -= 1;
                return true;
            }
        }

        return false;
    }

    clear() {
        this.arr = Array.from({ length: this.initialSize }, () => []);
        this.amountOfItems = 0;
        return;
    }

    size() {
        return this.amountOfItems;
    }

    rebalance() {
        let tempArray = this.arr;
        this.arr = Array.from({ length: this.arr.length * 2 }, () => []);
        this.amountOfItems = 0;

        for (const items of tempArray) {
            if (items.length === 0) {
                continue;
            }
            for (const item of items) {
                this.set(item.key, item.value);
            }
        }
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