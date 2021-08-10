/**
 * 题目：从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
 * 数组长度为 5 ，数组的数取值为 [0, 13] .
 * 解法1：集合
 * 解法2：排序
 * 这个题很简单，但是要把写简单却不容易，要求想出以下几点。
 * 是顺子的话，要满足以下要求：
 * 1. 除了0以外不能有重复数字
 * 2. 除0以外，max-min<5。（这个很难想，我的想法是分别考虑几个0的情况，但其实只要满足这个，无论几个0）
 * 想清楚以上就好写了，主要就是判重，可以用集合或者排序的方法。
 */
var isStraight = function (nums) {
	let set = new Set()
	let max = -1
	let min = 14 // 易错，min初始值要设成最大的
	for (let i in nums) {
		if (nums[i] === 0) continue
		if (set.has(nums[i])) return false
		else set.add(nums[i])
		max = Math.max(max, nums[i])
		min = Math.min(min, nums[i])
	}
	if (max - min >= 5) return false
	return true
}
