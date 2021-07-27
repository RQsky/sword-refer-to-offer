/**
 * 题目：输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。
 * 解法1：从序列的角度
 * - 二叉搜索树的中序遍历是一个排序序列，也就是要输出的双向链表的顺序。
 * - 所以只要在中序遍历过程中记录前驱节点，即可构建目标双向链表。
 * - 遍历完后要特别处理头节点和尾节点
 * 解法2：从树的角度
 * - 每个节点的操作是，将本身，左子树中值最大的节点，右子树中值最小的节点建立指向关系。
 * - 者可以用深度优先搜索递归实现。
 * - 难点在于处理只有一个子树的节点情况
 * - 遍历完后要特别处理头节点和尾节点
 */
// 序列
var treeToDoublyList = function(root) {
    if(!root) return null
    let pre = null
    let head = null
    const dfs = function (root) {
        if (!root) return null
        dfs(root.left)
        if (pre) pre.right = root
        else head=root
        root.left=pre
        pre=root
        dfs(root.right)
    }
    dfs(root)
    pre.right=head
    head.left=pre
    return head
};
// 树
var treeToDoublyList = function(root) {
    if (!root) return root
    let [head, tail] = recur (root)
    head.left = tail
    tail.right = head
    return head
};
const recur = function (root) {
    let lMin, lMax, rMin, rMax
    if (!root.left) lMin = root
    else {
        [lMin, lMax] = recur(root.left)
        root.left = lMax
        lMax.right = root
    }
    if (!root.right) rMax = root
    else {
        [rMin, rMax] = recur(root.right)
        root.right = rMin
        rMin.left = root
    }
    return [lMin, rMax]
}