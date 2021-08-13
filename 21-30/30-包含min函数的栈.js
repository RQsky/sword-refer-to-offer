/**
 * 题目：定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 * 解法：单调（递减）栈B，主栈A。
 */
// XXX 构造函数里要用this.xx 来定义属性或者方法
// XXX array.slice 返回的是数组对象，即使slice(-1)也返回一个包含单个元素的数组，不能直接比较相等。
// XXX 但是可以比较　>= <=　<　>，JS引擎会自动将参与比较的数转数字。
var MinStack = function () {
	this.A = []
	this.B = []
}

MinStack.prototype.push = function (x) {
	this.A.push(x)
	if (this.B.length === 0 || this.B.slice(-1) >= x) this.B.push(x)
}

MinStack.prototype.pop = function () {
	if (this.A[this.A.length - 1] === this.B[this.B.length - 1]) this.B.pop()
	this.A.pop()
}

MinStack.prototype.top = function () {
	return this.A.slice(-1)
}

MinStack.prototype.min = function () {
	return this.B.slice(-1)
}
