/**
 * 题目：字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。
 * - 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * 解法1：切片。
 * 解法2：字符串遍历拼接。字符串为不可变对象，每次在内存中都会新建字符串
 * 解法3：数组遍历拼接。字符串的很多题都是先将字符串转数组。
 * 解法4：三次翻转。字符串没有内置的翻转方法，需要循环遍历翻转，或者递归翻转。另外可以转数组然后翻转
 * - 所以是：切割，转数组，翻转，拼接，翻转，转字符串
 */
// XXX 切片 js切字符串3种方法，slice() / substr() / substring(), slice() 一般是最好用的。
var reverseLeftWords = function (s, n) {
	return s.slice(0, n) + s.slice(n)
}
// 字符串遍历拼接。
var reverseLeftWords = function (s, n) {
	let res = ''
	for (let i = n; i < s.length; i++) res += s[i]
	for (let i = 0; i < n; i++) res += s[i]
	return res
}
// 数组遍历拼接
var reverseLeftWords = function (s, n) {
	let res = []
	for (let i = n; i < s.length; i++) res.push(s[i])
	for (let i = 0; i < n; i++) res.push(s[i])
	return res.join('')
}
// XXX 三次翻转 字符串转数组3种方法：Array.from(), s.split(''), [...s]
var reverseLeftWords = function (s, n) {
	let arr1 = Array.from(s.slice(0, n))
	let arr2 = Array.from(s.slice(n))
	let arr = arr1.reverse().concat(arr2.reverse())
	return arr.reverse().join('')
}
