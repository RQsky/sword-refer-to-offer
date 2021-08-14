/**
 * 题目：把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。
 * 解法：动态规划（状态定义，转移方程，初始状态）
 * - 状态定义：dp[i], 是一个概率数组，表示共i+1个骰子的概率输出结果
 * - 转移方程：每一个状态的dp仅和前一状态有关，可以优化为贪心算法。
 * - - 简单来说，就是遍历上一状态的dp，每个概率元素都会对本状态的6个点数的概率有贡献，计算所有贡献并对应求和，即得本状态dp
 * - 初始状态：Array(6).fill(1/6)
 */
var dicesProbability = function (n) {
	let dp = Array(6).fill(1 / 6)
	let sead = dp
	for (let i = 2; i <= n; i++) {
		let temp = Array(dp.length + 5).fill(0)
		for (let k in dp) for (let j in sead) temp[parseInt(k) + parseInt(j)] += dp[k] * sead[j]
		dp = temp
	}
	return dp
}
