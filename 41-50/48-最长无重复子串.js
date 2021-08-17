/**
 * 题目：请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
 * 提示：s.length <= 40000
 * 解法：哈希表，key:字符，value:已发现的较大的对应下标。
 * - 看到字符，找哈希表中有无当前字符，无则加入。
 * - 有则判断下标是否大于当前start位置，小于则start不动，大于则更新start位置。
 * - 然后更新哈希表和max即最大子串长度。
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    let sta = 0
    let arr = Array.from(s) // XXX es6 方法，可以把类数组对象（含有length属性的对象）转为数组。
    let map = new Map()
    for (let i in arr) {
        // XXX 不要用字符串+数字，这代表字符串加法。可以用减法，也可以数字+字符串，也可以先把字符串转数字，再相加。
        if (map.has(arr[i])) if (map.get(arr[i]) >= sta) sta = map.get(arr[i]) - -1
        map.set(arr[i], i)
        max = Math.max(max, i-sta+1)
    }
    return max
};