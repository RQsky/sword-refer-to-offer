/**
 * 题目：完全反转链表
 * 解法：
 *      1. 双指针
 *      2. 递归
 */
// 法1
var reverseList = function (head) {
	let cur = head,
		pre = null
	while (cur) [cur.next, pre, cur] = [pre, cur, cur.next]
	return pre
}
// 法2
var reverseList = function (head) {
	let res
	recur(head)
	head.next = null // XXX 一个变量去循环，一定记得清空head.next，否则有环。
	return res
	function recur(head) {
		// 终止条件
		if (head.next == null) {
			res = head
			return head
		}
		// 处理过程
		// drill down
		let newHead = recur(head.next)
		// 后处理
		newHead.next = head
		return head
	}
}
