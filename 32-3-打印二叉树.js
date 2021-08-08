/**
 * 题目：请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
 * 解法：显然是广度优先，可以用队列实现，难点在于有时从左到右，有时从右到左打印。可以设置标志位。在压入结果数组时判断是否需要逆序
 */
var levelOrder = function (root) {
	if (!root) return []
	let res = []
	let queue = [root]
	let forward = true
	while (queue.length) {
		let resTemp = []
		let temp = []
		for (let i in queue) {
			resTemp.push(queue[i].val)
			if (queue[i].left) temp.push(queue[i].left)
			if (queue[i].right) temp.push(queue[i].right)
		}
		if (!forward) resTemp.reverse()
		res.push(resTemp)
		forward = !forward
		queue = temp
	}
	return res
}
