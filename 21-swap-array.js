/**
 * 题目：输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 * 解法：
 *      1. 首尾指针（要点是清楚交换的时机）
 *      2. 快慢指针
 */
var exchange = function (nums) {
	let i = 0,
		j = nums.length - 1
	while (i < j) {
		if (nums[i] & 1) {
			i++
			continue
		}
		if (!(nums[j] & 1)) {
			// XXX '!'运算符后要加括号
			j--
			continue
		}
		;[nums[i], nums[j]] = [nums[j], nums[i]] // XXX 除了中间变量外，第二种变量交换方法——解构运算符。
	}
	return nums
}
