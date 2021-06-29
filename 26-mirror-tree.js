/**
 * 题目：请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 * 解法：递归
 */
var mirrorTree = function (root) {
	if (!root) return null // XXX 注意判空
	let temp = mirrorTree(root.right)
	root.right = mirrorTree(root.left)
	root.left = temp
	// [ root.right, root.left ] = [ root.left, root.right ]    // XXX 依然不能解构
	return root
}
