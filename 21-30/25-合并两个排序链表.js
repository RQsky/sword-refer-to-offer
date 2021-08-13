/**
 * 题目：输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 * 解法：伪链表头
 */
var mergeTwoLists = function (l1, l2) {
	if (l1 === null && l2 === null) return null // XXX 不做判空也可以，做了显得更规范。
	let res = new ListNode()
	let head = res
	while (l1 && l2) {
		if (l1.val < l2.val) [head.next, l1] = [l1, l1.next]
		else [head.next, l2] = [l2, l2.next]
		head = head.next
	} // XXX l1不空和空，傻傻分不清，看来是累了。
	if (l1) head.next = l1
	else head.next = l2
	return res.next
}
