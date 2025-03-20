// Contains Duplicate
// 2025-3-19
// https://leetcode.com/problems/contains-duplicate/description/
//
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let nums = [];

// 1回目に書いたコード
// 計算量 O(n^2)?
//
/* function containsDuplicate(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums.includes(nums[i], i + 1)) {
            return true;
        }
    }
    return false 
} */

// 改善案
// ハッシュマップを使うと、O(1)で検索できる
// ハッシュマップの作成の計算量は、O(n)
// したがって、1回目のコードより計算量を減らせるはず
//
function containsDuplicate(nums) {
    let hashMap = {};

    // ハッシュマップを作成する
    // キーにnumsの要素、バリューにそれぞれのインデックスを登録する
    // ハッシュマップでは、すでに同じキーが存在する場合、バリューは上書きされる
    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = i;
    }

    // hashMapのバリューとnumsのインデックスを0から比較する
    // それらが一致しない＝重複が存在するため、trueを返す
    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] !== i) {
            return true;
        }
    }

    return false;
}

// nums = [1,2,3,1];               // true
// nums = [1,2,3,4];               // false
// nums = [1,1,1,3,3,4,3,2,4,2];   // true

containsDuplicate(nums)