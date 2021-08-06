/**
 * 题目：输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
 * 解法：自底向上递归。
 */
var isBalanced = function(root) {
    // 树为空也可以开启递归，不用特别考虑
    return recur(root)[1]
    // 可以提前结束递归吗：可以，在left返回之后，或right返回之后,如果子树不是平衡二叉树则可以直接返回。
    // 还可以降维，每一个返回值包括深度和是否平衡二叉树两个信息，其实可以合二为一。
};
const recur = function (root) {
    // 终止条件
    if (!root) return [0,true]
    // 处理过程
    // drill down
    const depLeft = recur (root.left)
    const depRight = recur (root.right)
    // 后处理
    const flag = Math.pow(depLeft[0]-depRight[0], 2) <= 1? true: false
    return [ Math.max(depLeft[0],depRight[0])+1, flag && depLeft[1] && depRight[1]]
}