/**
 * 题目：输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 * 解法1：简单打印。先算出最大值，然后用循环。（不越界时可用）
 * 延申考点：大数打印，因为范围越界，所以要用字符串打印
 * 解法2：字符串全排列。（要考虑删除高位的0） TODO
 */
var printNumbers = function (n) {
	const max = Math.pow(10, n) - 1
	let res = []
	for (let i = 1; i <= max; i++) {
		res.push(i)
	}
	return res
}
