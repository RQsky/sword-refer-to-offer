/**
 * 题目：给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
 * - 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 解法：DFS
 * 1. 匹配单词的首个字母和矩阵中当前元素。
 * 2. 匹配到之后开始匹配单词后面的字母
 * 3. 匹配后面时维护集合，存储走过的索引。（这里我用的一个新数组，也没问题）
 * 4. 判断越界，判断当前单词不匹配，集合重复，返回false。
 * 5. 判断单词当前字母索引等于单词长，即匹配成功，返回true。
 */
var exist = function (board, word) {
	const m = board.length
	const n = board[0].length
	const used = Array(m)
		.fill(false)
		.map(x => Array(n).fill(false))

	const search = (row, col, cha) => {
		if (cha == word.length) return true
		if (row < 0 || row >= m || col < 0 || col >= n) return false
		if (word[cha] != board[row][col] || used[row][col]) return false

		used[row][col] = true
		const canFind =
			search(row + 1, col, cha + 1) ||
			search(row - 1, col, cha + 1) ||
			search(row, col + 1, cha + 1) ||
			search(row, col - 1, cha + 1)
		if (canFind) return true
		used[row][col] = false
		return false
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (search(i, j, 0)) return true
		}
	}
	return false
}
