/**
 * 题目：给定一棵二叉搜索树，请找出其中第k大的节点。
 * 解法：二叉搜索树中序遍历的结果是递增序列，反向中序遍历结果则是递减序列。
 * - 返回反向中序遍历的第k个节点即可。
 */
var kthLargest = function(root, k) {
    let res = 0
    helper(root)
    function helper(root) {
        if(root == null) return
        helper(root.right)
        if (k==0) return    // XXX 提前结束
        k--
        if (k==0) res = root.val
        helper(root.left)
    }
    return res
};