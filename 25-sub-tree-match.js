/**
 * 题目：输入两棵二叉树A和B，判断B是不是A的子结构
 * 解法：深度优先搜索（递归写法）
 *      1. 先深度优先搜索A，寻找与B的根节点值相等的所有A中的节点，对于每一个。
 *      2. 试图匹配整个B。
 */
var isSubStructure = function (A, B) {
	if (!A || !B) return false
	if (A.val == B.val && match(A, B)) return true
	else return isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

const match = (A, B) => {
	if (!B) return true
	if (!A) return false
	if (A.val != B.val) return false
	return match(A.left, B.left) && match(A.right, B.right)
}
