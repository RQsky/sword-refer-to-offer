/**
 * 题目：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 * 解法：最容易想到的应该是每个窗口都找最大然后输出，复杂度O(kn)。
 * - 另一种方法可以维护一个有序数组，每次用二分法插入，删除，复杂度O(logk)，输出是O(1)。总共复杂度O(nlogk)
 * - 用堆代替这个有序数组也是一样，而且堆应该不适合删除一个指定数字，所以堆不好。
 * - 这道题的标准解法是：单调队列
 * - 因为我们需要保存窗口最大值的基础上，维护一个单调非严格递减队列，保存最大值后面的按顺序的第二最大，第三最大等。
 */
var maxSlidingWindow = function (nums, k) {
	if (!nums.length) return []
	let queue = []
	let res = []
	for (let i = 0; i < nums.length; i++) {
		if (!queue.length) {
			queue.push(nums[i])
		} else {
			if (i >= k && queue[0] === nums[i - k]) queue.shift()
			if (nums[i] <= queue.slice(-1)) queue.push(nums[i])
			else {
				while (queue.length && queue.slice(-1) < nums[i]) queue.pop()
				queue.push(nums[i])
			}
		}
		if (i >= k - 1) res.push(queue[0])
	}
	return res
}
