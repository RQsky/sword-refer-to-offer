/**
 * 题目：输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
 * 解法：二叉搜索树满足，左子树的任意节点值小于根节点值，右子树的任意节点值大于根节点值。
 * - 所以自顶向下，维护上下界，判断root.val是否满足要求，不满足则判定为false。
 * - 满足的话则递归，问题转化为子问题，用root.val作为新的界
 */
var verifyPostorder = function(postorder) {
    return judge (postorder, -Infinity, Infinity)
};
const judge = (arr, lower, upper) => {
    if (!arr.length) return true
    let root = arr[arr.length-1]
    if (root<lower || root>upper) return false
    let divide = arr.length-1   // XXX 这里左右子树为空的情况要考虑清楚。
    for (let i=0;i<arr.length-1;i++) {
        if (arr[i]>root) {
            divide = i
            break
        }
    }
    let left = arr.slice(0,divide)
    let right = arr.slice(divide,arr.length-1)
    return judge(left, lower, root) && judge(right, root, upper)
}