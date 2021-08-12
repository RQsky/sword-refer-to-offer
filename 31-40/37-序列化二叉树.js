/**
 * 题目：请实现两个函数，分别用来序列化和反序列化二叉树。你需要设计一个算法来实现二叉树的序列化与反序列化。
 * - 这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 * 解法：序列化过程其实就是层序遍历，不同的是，如果节点的next是null那么也保存在结果字符串中，用一个符号标识，我用的是'N'
 */

var serialize = function (root) {
	if (!root) return '' // 防止root==null
	let res = [root.val]
	let queue = [root]
	while (queue.length) {
		let head = queue.shift()
		if (head.left) {
			queue.push(head.left)
			res.push(head.left.val)
		} else res.push('N')
		if (head.right) {
			queue.push(head.right)
			res.push(head.right.val)
		} else res.push('N')
	}
	return res.join(',') // 需要分隔符，否则负数或大于9的数会出错
}

var deserialize = function (data) {
	if (!data.length) return null
	let arr = data.split(',')
	let root = new TreeNode(parseInt(arr.shift()))
	let queue = [root]
	while (queue.length) {
		let cur = queue.shift()
		let leftVal = arr.shift()
		let rightVal = arr.shift()
		if (leftVal === 'N') cur.left = null
		else {
			cur.left = new TreeNode(parseInt(leftVal))
			queue.push(cur.left)
		}
		if (rightVal === 'N') cur.right = null
		else {
			cur.right = new TreeNode(parseInt(rightVal))
			queue.push(cur.right)
		}
	}
	return root
}
