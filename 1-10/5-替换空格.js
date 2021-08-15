/**
 * 题目：请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 解法1：split() + join()
 * 解法2：replace() + 正则表达式 / replaceAll()
 * - replace()方法会用 替换值 替换字符串内的一个模式，只有替换值是正则，才会替换所有的指定模式。
 * - \s 表示匹配一个空白字符；/是正则开始和结尾的标记；g 是全局搜索标记；
 * 解法3：原地转换
 * 解法4：使用循环遍历字符串，把字符加入新串；当遇到空格，加入'%20'。
 * - NOTE 不能通过索引改变字符串。
 */
// split() + join()
var replaceSpace = function (s) {
	return (s = s.split(' ').join('%20'))
}
// replace() + 正则表达式
var replaceSpace = function (s) {
	return s.replace(/\s/g, '%20')
}
// replaceAll()
var replaceSpace = function (s) {
	return s.replaceAll(' ', '%20')
}
// 循环遍历
var replaceSpace = function (s) {
	let res = ''
	for (let i of s) res += i == ' ' ? '%20' : i
	return res
}
