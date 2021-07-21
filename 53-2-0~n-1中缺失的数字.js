/**
 * 题目：一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
 * 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 * 解法：二分法，但是我的两段代码细节有不同。
 */
// 基本思想是i,j夹逼，最终target在i,j指向的数之间
var missingNumber = function(nums) {
    const len = nums.length
    if (nums[0] !== 0) return 0     // XXX 比下面的写法要多考虑缺边界的情况。
    if (nums[len-1] !== len) return len
    let i = 0
    let j = len - 1
    while (i<j-1) {
        let mid = i + Math.floor((j-i)/2)
        if (nums[mid] === mid) i=mid
        else j=mid
    }
    return i+1
};
// 基本思想也是夹逼，但不是严格的夹逼
var missingNumber = function(nums) {
    const len = nums.length
    let i = 0
    let j = len - 1
    while (i<=j) {
        let mid = i + Math.floor((j-i)/2)
        if (nums[mid] === mid) i=mid+1
        else j=mid-1
    }
    return i
};