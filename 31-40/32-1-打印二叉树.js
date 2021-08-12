/**
 * 题目：从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
 * 解法：标准广度优先
 */
var levelOrder = function (root) {
	if (root === null) return []
	let res = []
	let queue = [root]
	while (queue.length) {
		let head = queue.shift()
		res.push(head.val)
		if (head.left !== null) queue.push(head.left)
		if (head.right !== null) queue.push(head.right)
	}
	return res
}
