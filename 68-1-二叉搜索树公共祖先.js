/**
 * 题目：给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * - 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * 方法一：递归方法
 * - 归就是 return，逐级return，没有问题。
 * - 处理逻辑就是 分岔路口。
 * - XXX 有可能出现 root == p || q 的情况。
 * 方法二：非递归。
 */
// 递归
var lowestCommonAncestor = function (root, p, q) {
	if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q)
	if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q)
	return root
}
// 循环
var lowestCommonAncestor = function (root, p, q) {
	while (root) {
		if (p.val < root.val && q.val < root.val) root = root.left
		else if (p.val > root.val && q.val > root.val) root = root.right
		else return root
	}
}
