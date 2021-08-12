/**
 * 题目：请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
 * 法1：拼接+拆分。把新节点插入对应的原节点的末尾，形成旧-新-旧-新...增广链表，然后再调random指针。
 * 法2：哈希表。key:原节点, value:新节点，先遍历一遍建立哈希表，且为新节点赋值；再遍历一遍将新节点的next和random指针调好
 * NOTE 两种方法都必须两遍遍历
 */
var copyRandomList = function (head) {
	if (!head) return
	let add = head
	while (add) {
		add.next = new Node(add.val, add.next)
		add = add.next.next
	}
	add = head
	while (add) {
		if (add.random) add.next.random = add.random.next
		add = add.next.next
	}
	let cur = (newHead = head.next)
	let pre = head
	while (cur.next) {
		pre.next = pre.next.next
		cur.next = cur.next.next
		pre = pre.next
		cur = cur.next
	}
	pre.next = null
	return newHead
}
