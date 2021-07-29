/**
 * 题目：输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
 * - 解法1：哈希表
 * - 解法2：双指针
 * - 其他：两层循环；一层循环+二分查找
 */
var twoSum = function(nums, target) {
    let l = 0
    let r = nums.length-1
    let res = []
    while (l<r) {
        const sum = nums[l] + nums[r]
        if (sum === target) {
            res = [nums[l], nums[r]]
            break
        } else if (sum > target) r--
        else l++
    }
    return res
};