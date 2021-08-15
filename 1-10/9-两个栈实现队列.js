/**
 * 题目：用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 * 解法：定义2个栈分别为input和output
 * - 入队时，元素入input栈。
 * - 出队时，元素从output出；若output为空，则将input全体元素倒入output。
 */
var CQueue = function () {
	// 分输出栈和输入栈
	this.input = []
	this.output = []
}

CQueue.prototype.appendTail = function (value) {
	return this.input.push(value)
}

CQueue.prototype.deleteHead = function () {
	if (this.output.length == 0) {
		if (this.input.length == 0) return -1
		else {
			while (this.input[0]) {
				this.output.push(this.input.pop())
			}
		}
	}
	return this.output.pop()
}
