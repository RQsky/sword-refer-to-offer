/**
 * 题目：斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
 * - 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 * 解法1：动态规划
 * 解法2：矩阵乘法；解法3：公式法。（太过数学了，不懂无所谓）
 */
var fib = function (n) {
	let dp = [], dp[0] = 0, dp[1] = 1
	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 2] + dp[i - 1]
		dp[i] = dp[i] % (1e9 + 7)
	}
	return dp[n]
}
