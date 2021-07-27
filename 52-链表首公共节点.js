/**
 * 题目：输入两个链表，找出它们的第一个公共节点，不存在返回 null。
 * 解法1：哈希.
 * - 建立一个哈希表存A链表的节点们，遍历B同时判断节点是否包含在哈希表中，第一个包含的就是公共节点。
 * - 缺点：额外空间消耗大。
 * 解法2：先判断长度，再异步开始遍历。
 * - 也是一种双指针，保证双指针可以同时遍历到链表尾部，即首个指针相等的节点就是公共节点。
 * 解法3：双指针。
 * - 设链表A，B公共段长为c，链表A总长a+c, B总长b+c。(a+c)+b==(b+c)+a。双指针会在交点重合，若没有交点，双指针会在各遍历完2遍链表后重合到null。
 */
// 双指针
var getIntersectionNode = function(headA, headB) {
    let i = headA
    let j = headB
    while (i != j) {
        i = i == null? headB: i.next    // XXX 这样做是把null当成一个节点，这样可以更好的兼容链表无交点的情况。
        j = j == null? headA: j.next
    }
    return i    // XXX 返回节点本身，而不是节点值
};