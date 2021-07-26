/**
 * 题目：输入两个链表，找出它们的第一个公共节点。
 * 解法1：哈希
 * 解法2：先判断两个链表长度，再保证两个遍历指针同时到尾部的前提下开始遍历。
 * 解法3：双指针（最优）。一个指针遍历完链表A再走B，另一个相反。他们同时指向的第一个节点就是第一个公共节点。
 */
var getIntersectionNode = function(headA, headB) {
    let i = headA
    let j = headB
    while (i != j) {
        i = i == null? headB: i.next    // XXX 这样做是把null当成一个节点，这样可以更好的兼容链表无交点的情况。
        j = j == null? headA: j.next
    }
    return i    // XXX 根据题目要求，应该返回节点本身，而不是节点值
};