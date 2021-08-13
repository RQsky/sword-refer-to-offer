/**
 * 题目：请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
 * 解法：最简单的递归
 */
var isSymmetric = function (root) {
	if (root === null) return true
	return judge(root.left, root.right)
}

const judge = (a, b) => {
	if (a === null && b === null) return true
	if (a === null || b === null) return false
	if (a.val !== b.val) return false
	return judge(a.left, b.right) && judge(a.right, b.left)
}
