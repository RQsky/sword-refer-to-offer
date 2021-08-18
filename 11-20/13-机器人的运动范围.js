/**
 * 题目：地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，
 * - 它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。
 * - 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
 * 解法：BFS，DFS。
 * - 这个题最核心的问题就是可达解的规律：可达解必可以通过从它的左边或者上边进入。所以每个单元格都只需要访问右边和下边，就是完备的。
 */
//　BFS
var movingCount = function (m, n, k) {
	let visited = new Set() //　要记录被访问过的位置，因为有的元素的右边可能是另一个元素的下面，避免重复访问。
	let queue = [[0, 0]]
	while (queue.length) {
		let head = queue.shift()
		let i = head[0]
		let j = head[1]
		if (i >= m || j >= n || k < sum(i) + sum(j) || visited.has(`${i}+${j}`)) continue //　索引越界，数位和越界，已访问过，跳过。
		visited.add(`${i}+${j}`) //　XXX　JS的集合不能对数组判重，可能因为数组存的是指针。所以这里我存字符串把行列索引加起来。注意必须有一个分隔符分开行和列，否则１行１１列，１１行１列等无法区分。
		queue.push([i + 1, j])
		queue.push([i, j + 1])
	}
	return visited.size //　集合的长度属性不是length而是size
}
//　DFS
var movingCount = function (m, n, k) {
	let visited = new Set()
	const dfs = function (i, j) {
		if (i >= m || j >= n || visited.has(`${i}+${j}`) || sum(i) + sum(j) > k) return 0
		visited.add(`${i}+${j}`)
		return dfs(i + 1, j) + dfs(i, j + 1) + 1
	}
	dfs(0, 0)
	return visited.size
}
// 工具函数sum，用来计算数位和，两种搜索方法都要用到
const sum = function (x) {
	let s = 0
	while (x != 0) {
		s += x % 10
		x = Math.floor(x / 10)
	}
	return s
}
