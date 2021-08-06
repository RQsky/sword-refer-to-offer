/**
 * 题目：在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
 * 解法1：位运算 + 计次
 * - 每一位上1的次数应该都是3的倍数或者3的倍数多1.
 * - 所以把每一位的1次数%3结果就是目标数。
 * 解法2：位运算 + 有限状态自动机
 * - 上一种方法是用数组元素统计每一位次数的，这里只用两个数（每个32位，共64位）。
 * - 我们其实不需要知道每一位1出现的具体次数，只需要知道它是不是3的倍数，所以可以用三种状态（2个2进制位）表示
 * - 然后把状态转换的if-else巧妙写成位运算。
 * - 这种方法我觉得还是太取巧了，会第一种就足够。
 */
// 位运算 + 计次
var singleNumber = function(nums) {
    let count = Array(32).fill(0)   // XXX 创建一个长度为32的数组，用0填充每个元素
    for (let num of nums) {     // XXX let...of...
        for (let i=31;i>=0;i--) {
            if ((num&1) === 1) count[i]++
            num >>= 1
        }
    }
    for (let i in count) {
        if (count[i]%3) count[i]=1
        else count[i] = 0
    }
    return parseInt(count.join(''),2)   // XXX 数组转字符串并解析为2进制数。
};
// 位运算 + 有限状态自动机
var singleNumber = function(nums) {
    let ones = 0, twos = 0
    for (let num of nums) {
        ones = ones ^ num & ~twos
        twos = twos ^ num & ~ones
    }
    return ones
};