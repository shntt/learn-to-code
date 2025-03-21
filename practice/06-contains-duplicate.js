// Contains Duplicate
// 2025-3-19
// https://leetcode.com/problems/contains-duplicate/description/
//
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let nums = [];

// 第1案
// 2乗ループで計算量 最大の場合、O(n^2)に近い？
function containsDuplicate1(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums.includes(nums[i], i + 1)) {
            return true;
        }
    }
    return false 
}

// 第2案
// Mapの作成の計算量はO(n)。検索も最大O(N)で可能
function containsDuplicate2(nums) {
    let map = new Map;

    // Mapを作成する(重複が存在する場合、valueは上書きされる)
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    // hashMapのvalueとnumsのindexが一致しない ＝ 重複が存在するため、trueを返す
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) !== i) {
            return true;
        }
    }

    return false;
}

// 第3案
// Setを使って重複する要素を削除して、元の配列と長さを比較する
function containsDuplicate3(nums) {
    const newNums = new Set(nums);
    return nums.length !== newNums.size;
}
// Mapと違い、valueを持たないため、さらに計算量が少なく済むのか？
// メソッドを使うときは、そのメソッドの挙動・計算量を理解したほうがよさそう

nums = [1,2,3,1];               // true
// nums = [1,2,3,4];               // false
// nums = [1,1,1,3,3,4,3,2,4,2];   // true

containsDuplicate3(nums);