/**
 * 题目：输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 * 解法：核心是一直维护一个还未访问过的上下左右边界，打印逻辑写在最后的else里。
 * 另外在top==bottom（或大于） || left == right（或大于）时逻辑有所不同。
 */
var spiralOrder = function (matrix) {
	if (matrix.length === 0) return []
	return print(matrix, 0, matrix.length - 1, 0, matrix[0].length - 1, [])
}
const print = (matrix, top, bottom, left, right, res) => {
	if (top > bottom || left > right) return res
	if (top === bottom) {
		for (let i = left; i <= right; i++) {
			res.push(matrix[top][i])
		}
		return res
	} else if (left === right) {
		for (let i = top; i <= bottom; i++) {
			res.push(matrix[i][right])
		}
		return res
	} else {
		for (let i = left; i < right; i++) {
			res.push(matrix[top][i])
		}
		for (let i = top; i < bottom; i++) {
			res.push(matrix[i][right])
		}
		for (let i = right; i > left; i--) {
			res.push(matrix[bottom][i])
		}
		for (let i = bottom; i > top; i--) {
			res.push(matrix[i][left])
		}
		return print(matrix, top + 1, bottom - 1, left + 1, right - 1, res)
	}
}
