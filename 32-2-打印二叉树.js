/**
 * 题目：从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
 * 解法：标准广度优先，模板可以背一背
 */
var levelOrder = function (root) {
	if (!root) return []
	let res = []
	let queue = [root]
	while (queue.length) {
		let resTemp = []
		let temp = []
		for (let i in queue) {
			resTemp.push(queue[i].val)
			if (queue[i].left) temp.push(queue[i].left)
			if (queue[i].right) temp.push(queue[i].right)
		}
		queue = temp
		res.push(resTemp)
	}
	return res
}
