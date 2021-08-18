/**
 * 题目：给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。
 * - 请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 * 解法1：动态规划
 * - 状态定义，dp[i]，长为i的绳子切的最大乘积
 * - 状态转移，dp[i]=for(let j in i) Math.max(dp[j]*(i-j), j*(i-j), self)
 * - 初始状态，dp[1]=1
 * - NOTE j!=i，因为题规定必须切。
 * 解法2：数学方法 / 贪心算法
 * - 证明1：几乎每段切一样长，乘积最大
 * - 证明2：几乎每段切长度为3，乘积最大。
 */
// math
var cuttingRope = function (n) {
	if (n <= 3) return n - 1
	let res = 1
	while (n >= 3) {
		res *= 3
		n -= 3
	}
	if (n == 2) return res * 2
	if (n == 1) return (res * 4) / 3
	return res
}
// dp
var cuttingRope = function (n) {
	let dp = []
	dp[1] = 1
	for (let i = 2; i <= n; i++) {
		let temp = 0
		for (let j = 1; j < i; j++) {
			temp = Math.max(temp, j * dp[i - j], j * (i - j))
		}
		dp[i] = temp
	}
	return dp[n]
}
