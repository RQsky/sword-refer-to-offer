/**
 * 题目：给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 解法：
 *      1. 动态规划
 *      2. 贪心
 *      3. 分治
 */
var maxSubArray = function (nums) {
	// TODO 可以用分治法
	if (!nums.length) return null
	let max = nums[0]
	let singleMax = nums[0] // 当数组全为负，最大和就是值最大的那个，这个要额外记录下
	let temp = 0
	for (const i of nums) {
		temp = temp + i
		if (temp < 0) {
			temp = 0
		} else {
			max = temp > max ? temp : max
		}
		if (i > singleMax) singleMax = i
	}
	if (max > 0) return max
	return singleMax
}
