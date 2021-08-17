/**
 * 题目：在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 * 提示：0 <= s 的长度 <= 50000
 * 解法：哈希表。
 * - 值得一提的是，有人可能会在第二遍时候还是去遍历字符串s，其实只遍历哈希表就可以了。
 * - js 的哈希表是有序的，会按添加的顺序排列。
 */
var firstUniqChar = function(s) {
    // if (!s) return " "
    let res = " "   // XXX 注意题目要求没有则返回一个单空格，我这里错了。
    let map = new Map()
    for (let i in s) {
        if (map.has(s[i])) map.set(s[i], false)
        else map.set(s[i], true)
    }
    for (let j of map) {
        // j 称为迭代器对象，本质是数组，j[0]是key，j[1]是value。
        // console.log(j, j[0], j[1], typeof(j[0]), typeof(j[1]), typeof(j), Array.isArray(j))
        // [ 'l', true ] l true string boolean object true
        if (j[1]) {
            res = j[0]
            break
        }
    }
    return res
};