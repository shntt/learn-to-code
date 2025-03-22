// TwoSum
// 2025-3-19
// https://leetcode.com/problems/two-sum/description/
//
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

let nums = [];
let target;

function twoSum(nums, target) {
    let result = [];

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                result.push(i, j);
                return result;
            } 
        }
    }
}

// 計算量を抑えてみる 2025.3.21
function twoSum2(nums, target) {
    let mySet = new Set;

    for (let i = 0; i < nums.length; i++) {
        mySet.add(nums[i]);
    }

    for (let j = 0; j < nums.length - 1; j++) {
        if (mySet.has(target - nums[i])) {
            return true;
        }
    }
}

// Example 1 -> [0, 1]
nums = [2,7,11,15];
target = 9;

// Example 2 -> [1, 2]
// nums = [3,2,4];
// target = 6;

// Example 3 -> [0, 1]
// nums = [3,3];
// target = 6;

twoSum(nums, target);