/**
 * 题目：在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 解法：从左下往右上找，或者从右上往左下反着来。
 */
var findNumberIn2DArray = function (matrix, target) {
	let n = matrix.length
	if (n == 0) return false
	let m = matrix[0].length
	let i = n - 1
	let j = 0
	while (i >= 0 && j <= m - 1) {
		if (matrix[i][j] == target) return true
		if (matrix[i][j] > target) i--
		else j++
	}
	return false
}
