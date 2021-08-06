/**
 * 题目：一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。
 * 解法：位运算
 * - 任何数与本身异或=0
 * - 任何数与0异或=本身
 * - 异或满足交换律
 */
var singleNumbers = function(nums) {
    let res = 0
    let bit = 1
    let [a, b] = [0, 0]
    nums.forEach(num => res^=num)   // XXX res==x^y (数组的forEach()函数)
    while (!(bit & res)) bit <<= 1    // XXX bit找到x与y的哪一位不同 (注意'&'的优先级比'!'和'==='小，要带括号)
    nums.forEach(num => {   // 依靠不同的这一位把数组分为2半，分别逐个异或起来。
        if (num & bit) a^= num
        else b^= num
    })
    return [a, b]
};