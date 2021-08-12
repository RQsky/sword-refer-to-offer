/**
 * 题目：输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。
 * 解法：dfs
 */
var pathSum = function(root, target) {
    // XXX 如果你不在null节点结束，那么就需要控制递归走到瘸腿树的处理。
    // XXX 不要剪枝，他妈居然有负数
    if (!root) return []
    let res = []

    const recur = (root, tar, temp) => {
        // 终止条件
        if (!root) return
        if (!root.left && !root.right) {
            if (tar === root.val){
                temp.push(root.val)
                res.push(temp.slice())
                temp.pop()
                return
            } else return
        }
        // 处理逻辑
        temp.push(root.val)
        // drill down
        recur (root.left, tar - root.val, temp)
        recur (root.right, tar - root.val, temp)
        // 后处理
        temp.pop()
        return
    }
    recur (root, target, [])
    return res
};