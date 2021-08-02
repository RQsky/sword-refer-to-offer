/**
 * 题目：输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
 * - 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
 * 解法：滑动窗口
 */
var findContinuousSequence = function(target) {
    let sum = 0
    let res = []
    let queue = []
    let arr = Array.from(Array(Math.floor(target/2)+2).keys()).splice(1)    // XXX 生成一个长为target/2的数组基本够用，因为题目限定最少2个数。注意把0切掉
    for (let j in arr) {
        queue.push(arr[j])
        sum += arr[j]
        while (sum > target) sum -= queue.splice(0,1)   // XXX splice() 函数返回的是删掉的也就是首数字，操作之后arr数组是删了目标之后留下的部分。
        if (sum === target) res.push(queue.slice())     // XXX push() 所有引用类型都用slice() 做一个浅拷贝，否则后面改动queue就会出问题。
    }
    return res
};