/**
 * 题目：给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
 * - 返回删除后的链表的头节点。
 * 解法1：顺序遍历
 * 解法2：递归
 */
// 遍历
var deleteNode = function (head, val) {
	if (head.val == val) return head.next
	let point = head
	while (point.next) {
		if (point.next.val == val) {
			point.next = point.next.next
			break
		}
		point = point.next
	}
	return head
}
// recur
var deleteNode = function (head, val) {
	if (!head) return
	if (head.val == val) return head.next
	head.next = deleteNode(head.next, val)
	return head
}
