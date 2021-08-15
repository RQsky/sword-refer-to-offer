/**
 * 题目：找出数组中重复的数字。在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 * 解法1：哈希表
 * 解法2：原地交换
 */
// 原地交换
var findRepeatNumber = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != i) {
			if (nums[nums[i]] != nums[i]) {
				let temp = nums[i]
				nums[i] = nums[nums[i]]
				nums[temp] = temp
				i--
			} else {
				return nums[i]
			}
		}
	}
	return -1
}
