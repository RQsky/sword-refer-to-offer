/**
 * 题目：输出链表的倒数第k个节点
 * 解法：双指针。
 * NOTE: 有可能链表长度小于k，不存在倒数第k个节点。
 */
var getKthFromEnd = function (head, k) {
	let count = k
	let fast = head
	let slow
	while (fast !== null) {
		fast = fast.next
		if (--k == 0) {
			slow = head
		} else if (k <= 0) {
			slow = slow.next // XXX 细节，分析清楚slow什么时候开始。
		}
	}
	return slow
}
