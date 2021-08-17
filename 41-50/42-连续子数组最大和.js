/**
 * 题目：给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 解法：
 *      1. 动态规划
 *      2. 贪心
 *      3. 分治
 * 1. 动态规划（标准动态规划流程：状态定义，转移方程，初始状态，返回值）
 * 		怎么想到的：我觉得是 “最...的子...”
 * 		定义：dp[i] 代表以元素 nums[i] 为结尾的连续子数组最大和。
 * 		- （要点：一定要包含元素nums[i]，为了递推。如果不加这个限制，可以容易想到dp[i]可以代表下标从0-i这个子数组的连续子数组最大和，但这样无法递推到i+1。
 * 		- 事实上如果题做多了，就会发现同类型都是这么做的，会形成习惯。）
 * 		转移：if (dp[i-1]>0) dp[i] = dp[i-1] + nums[i]
 * 		- if (dp[i-1]<=0) dp[i] = nums[i]
 * 		初状态：dp[0] = nums[0]
 * 		返回：dp 中的最大值。
 * 		优化：可以用原数组构建dp，这样就是O(1)，否则是O(n)。
 * 2. 贪心算法
 * 		用sum保存当前叠加和。
 * 		- 假如叠加上当前数字，和小于0了，就清空sum。再从下一个开始重新叠加，因为可以视作之前的叠加算是负贡献。
 * 		- 假如叠加上当前数字，和大于0就叠加。
 * 		遍历过程中，用max保存最大值。
 * 3. 分治法看起来代码好长呀，偷个懒哈哈。
 */
// 动态规划
var maxSubArray = function (nums) {
	if (!nums.length) return null // 这个题可以不写这句，不过养成习惯嘛
	let max = nums[0]
	for (const i in nums) if (i !== 0) if (nums[i - 1] > 0) nums[i] += nums[i - 1]
	return Math.max(...nums) // XXX max() 返回一组数的最大值；...解构运算符；
}

// 贪心
var maxSubArray = function (nums) {
	if (!nums.length) return null
	let max = nums[0]
	let sum = 0
	for (const i in nums) {
		sum += nums[i]
		max = Math.max(max, sum)
		if (sum < 0) sum = 0
	}
	return max
}
