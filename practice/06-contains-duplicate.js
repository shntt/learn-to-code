// Contains Duplicate
// 2025-3-19
// https://leetcode.com/problems/contains-duplicate/description/
//
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let nums = [];

function containsDuplicate(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums.includes(nums[i], i + 1)) {
            return true;
        }
    }
    return false 
}

// nums = [1,2,3,1];               // true
// nums = [1,2,3,4];               // false
// nums = [1,1,1,3,3,4,3,2,4,2];   // true

containsDuplicate(nums)