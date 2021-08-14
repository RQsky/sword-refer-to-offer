/**
 * 题目：统计一个数字在排序数组中出现的次数。
 * 解法：二分查找。可以先查找第一个target出现的位置，再查找第一个target+1出现的位置。然后相减即得次数。
 * - 要注意的是target+1有可能不存在，但注意我的函数设计，即使不存在也会返回正确索引。
 */
var search = function (nums, target) {
	if (!nums.length) return 0
	let l = find(target, nums)
	let r = find(target + 1, nums)
	return r - l
}
/**
 * 二分查找的细节就在于，循环里的条件是l<=r还是l<r。一般来说，如果要找的target不一定在nums中，条件就是l<=r。
 * 我在做题时首先会确定r = mid - 1，及l = mid + 1。然后很容易想到如果mid=target时，移动右指针，所以和mid>target情况放在一起。
 * 但是又会想到，在mid=target情况下有可能mid就是要找的第一个target，此时另r = mid - 1不就排除正确答案了吗？
 * 所以要点1：不要怕排除正确答案，虽然排除了，但是再往下循环都一直会移动左指针，最后左指针会指向右指针后面一位，依然会得正确解。
 * 要点2：在写r = mid - 1，及l = mid + 1条件时，不会存在死循环。只需要考虑最后一层循环的两种情况[target-1, target], [target, target]
 * - 考虑这两种情况下算法是否正确就行了。
 */
const find = function (target, nums) {
	let l = 0
	let r = nums.length - 1
	while (l <= r) {
		let mid = l + Math.floor((r - l) / 2)
		if (nums[mid] >= target) r = mid - 1
		else l = mid + 1
	}
	return l
}
