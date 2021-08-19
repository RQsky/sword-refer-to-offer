/**
 * 题目：编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。
 * 解法1：把输入的数字转二进制字符串，逐位计数
 * 解法2：位运算。首位 &1，然后用无符号右移移位，循环。
 * 解法3：一直对2取模，但该方法无法处理负数。所以pass
 */
var hammingWeight = function (n) {
	// NOTE 输入是二进制数字，直接转字符串会转成十进制。
	const str = n.toString(2)
	let count = 0
	for (let i of str) {
		if (parseInt(i) === 1) count++ // XXX　字符数字转数字，除了这种方法，还可以用‘i-1’
	}
	return count
}
