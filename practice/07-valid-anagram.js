// Valid Anagram
// 2025-3-21
// https://leetcode.com/problems/valid-anagram/description/
//
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

let s = ""
let t = ""

function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    // MapはSetと同様、検索時の計算量を抑えられる
    // 一方、Setと異なり、valueを持てるため、重複のカウントに使える
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (!map.has(t[j])) {
            return false;
        } else if (map.get(t[j]) > 1) {
            map.set(t[j], map.get(t[j]) - 1);
        } else {
            map.delete(t[j]);
        }
    }

    return true;
}

// Example 1 -> true
s = "anagram";
t = "nagaram";

// Example 2 -> false
// s = "rat";
// t = "car";

isAnagram(s, t);