/**
 * 题目：输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 解法：递归
 */
var buildTree = function (preorder, inorder) {
	if (preorder.length == 0 || inorder.length == 0) return null
	const val = preorder[0]
	const node = new TreeNode(val)
	// 中序遍历分为两个部分，前一半是左子树，后一半又子树
	const index = inorder.indexOf(val)

	node.left = build(preorder.slice(1, index + 1), inorder.slice(0, index))
	node.right = build(preorder.slice(index + 1), inorder.slice(index + 1))
	return node
}
