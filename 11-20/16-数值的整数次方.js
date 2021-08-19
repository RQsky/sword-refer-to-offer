/**
 * 题目：实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。
 * 解法：二分法+递归
 */
var myPow = function (x, n) {
	if (n == 0) return 1
	if (n < 0) return 1 / myPow(x, -n)
	if (n & 1) return x * myPow(x, n - 1)
	return myPow(Math.pow(x, 2), n / 2)
}
