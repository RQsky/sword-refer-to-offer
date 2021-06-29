/*
 * 题目：请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 解法：自动机
 * 第一步：建表，对象数组就可以
 * 第二步：设置初状态
 * 第三步：循环，分类当前字符，根据类别选择下一状态。
 * 第四步：判断，没有对应的下一状态就返回false，有就遍历完，如果最后在合理态那么为true。
 */
var isNumber = function (s) {
	const state = [
		{ ' ': 0, s: 1, d: 2, '.': 4 },
		{ d: 2, '.': 4 },
		{ d: 2, '.': 3, e: 5, ' ': 8 },
		{ d: 3, e: 5, ' ': 8 },
		{ d: 3 },
		{ s: 6, d: 7 },
		{ d: 7 },
		{ d: 7, ' ': 8 },
		{ ' ': 8 }
	]
	let p = 0
	let t
	for (let i of s) {
		t = '?' // XXX 因为每次t都要发生变化，所以每次循环要重新赋值
		// XXX 字符串判断其中有无字符只能 indexOf或者search了。
		if (i == 'e' || i == 'E') t = 'e'
		else if (i == '+' || i == '-') t = 's'
		else if (i == '.' || i == ' ') t = i
		else if (!isNaN(i)) t = 'd' // XXX isNaN() 会把，空格，null，空串，按0处理，判为false。
		if (state[p][t] === undefined) return false
		p = state[p][t]
	}
	return [2, 3, 7, 8].includes(p) // includes 函数，判断一个值是否在数组里。
}
