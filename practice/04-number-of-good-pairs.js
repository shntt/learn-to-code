// Number of Good Pairs
// 2025-3-19
// https://leetcode.com/problems/number-of-good-pairs/description/
//
// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

let nums = [];

function numIdenticalPairs(nums) {
    let totalOfGoodPairs = 0;

    // 配列numsのインデックス0から最後1つ前まで、順に回していく
    for (let i = 0; i < nums.length - 1; i++) {

        // i+1から最後のインデックスまで、順に確認する
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                totalOfGoodPairs++;
            }
        }
    }
    return totalOfGoodPairs;
}

nums = [1,2,3,1,1,3];   // 4
// nums = [1,1,1,1];       // 6
// nums = [1,2,3];         // 0

numIdenticalPairs(nums);