/**
 * 题目：请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。
 * - 若队列为空，pop_front 和 max_value 需要返回 -1
 * 解法：单调队列
 * - 1. 除了本身的数据流队列，额外维护一个单调队列，保存现在队列的最大值，和其右边的另外一个最大值，和右边的另外一个最大值(懂得都懂)
 * - 2. push时，插入数据流队列。也插入单调队列，但要保证其单调性。
 * - 3. pop时，数据流队列出队，单调队列看队头元素是否等于数据流头元素，等于则出队。
 * - 4. max时，输出单调队列头元素。

 */
var MaxQueue = function () {
	this.qu = [] // 数据流队列
	this.dandiao = [] // 当前数据流对应的单调队列
}

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
	return this.dandiao.length === 0 ? -1 : this.dandiao[0]
}

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
	this.qu.push(value)
	while (this.dandiao.length && this.dandiao.slice(-1) < value) this.dandiao.pop()
	this.dandiao.push(value)
}

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
	if (!this.qu.length) return -1
	if (this.qu[0] === this.dandiao[0]) this.dandiao.shift()
	return this.qu.shift()
}
