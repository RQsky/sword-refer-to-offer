/**
 * 题目：输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
 * 解法：递归
 * - 我这样的写法是自顶向下的，记录了一个层号表示深度，每次走到叶子节点尝试更新最大深度depth。
 * - 也可以写自底向上的方法，就是用返回子树的深度，然后当前树的深度就是更深的子树的深度+1
 */
var maxDepth = function(root) {
    let depth = 0
    helper(root,0)
    function helper (root,level) {
        // 终止条件
        if (root == null) {
            depth = Math.max(depth,level)
            return
        }
        // 处理逻辑:没有，就是level+1
        // drill down
        helper(root.left,level+1)
        helper(root.right,level+1)
        // 后处理：也没有，在终止的时候处理了
    }
    return depth
};