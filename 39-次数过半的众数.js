/**
 * 题目：数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 提示：数组非空；且总有符合条件的数。
 * 解法：
 *  1. 哈希表统计法（找最多出现次数的数的复杂度？）
 *  2. 数组排序法
 *  3. 摩尔投票法。
 *      数组长n，众数x
 *      推论1. 众数票+1，非众数-1，最终票总和大于0.
 *      推论2. 若前一段总和为0，后一段总和大于0.
 *      循环： 遍历数组 nums 中的每个数字 num ；
 *          当 票数 votes 等于 0 ，则假设当前数字 num 是众数；
 *          当 num = x 时，票数 votes 自增 1 ；当 num != x 时，票数 votes 自减 1 ；
 */
var majorityElement = function (nums) {
	let many
	let count = 0
	for (let i in nums) {
		if (count === 0) {
			many = nums[i]
			count++
		} else {
			if (many === nums[i]) count++
			else count--
		}
	}
	return many
}
