/**
 * 题目：输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * 解法1：栈
 * 解法2：递归
 */
// 递归
var reversePrint = function (head) {
	let res = []
	recurrent(head)
	return res

	function recurrent(head) {
		if (head == null) return
		recurrent(head.next)
		res.push(head.val)
	}
}
