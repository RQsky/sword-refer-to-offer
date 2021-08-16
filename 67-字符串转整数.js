/**
 * 题目：写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。
 * 解法：这是一道编码题
 * - 去掉首尾空格
 * - 若首位不是+-数字返回0
 * - 处理一下符号，开始判断数字
 * - 用for循环把数字拼成字符数组
 * - 把字符数组转成数字看是否越界
 * - 不越界转数字返回
 */
var strToInt = function (str) {
	str = str.trim() // XXX trim不会改变原字符串
	if (str) {
		if (str[0] === '+' || str[0] === '-' || !isNaN(str[0])) {
			let flag = 1
			let numArr = []
			const sliceNum = function (index) {
				for (let i = index; i < str.length; i++) {
					if (isNaN(str[i]) || str[i] === ' ') break // XXX isNaN()会把空格识别为数字，所以要额外考虑空格
					numArr.push(str[i])
				}
			}
			// 处理加减号
			if (str[0] === '+') sliceNum(1)
			else if (str[0] === '-') {
				sliceNum(1)
				flag = -1
			} else if (!isNaN(str[0])) sliceNum(0)
			if (!numArr.length) return 0 // 分别考虑字符数组长为0和越界的情况
			let num = flag * parseInt(numArr.join(''))
			if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1
			if (num < -Math.pow(2, 31)) return -Math.pow(2, 31)
			return num
		}
	}
	return 0
}
