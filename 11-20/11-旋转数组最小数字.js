/**
 * 题目：把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。
 * 解法：二分查找
 */
var minArray = function (numbers) {
	const len = numbers.length
	if (len == 0) return
	if (len == 1) return numbers[0]
	let left = 0,
		right = len - 1
	if (numbers[left] < numbers[right]) return numbers[0]
	// 一般应该不变这个
	while (left < right) {
		let mid = left + Math.floor((right - left) / 2)
		// NOTE 不能和左端点比较，因为有可能这个数组是顺序的，找最大值应该是和左比较。
		if (numbers[mid] < numbers[right]) right = mid
		// 尽量贪婪的+1-1
		else if (numbers[mid] > numbers[right]) left = mid + 1
		else right--
	}
	return numbers[left]
}
