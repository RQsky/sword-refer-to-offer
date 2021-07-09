/**
 * 题目：输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 类型：自定义排序。
 * 解法：快速排序，内置函数
 * 首先我想到的方法是找规律。
 * - 可以先观察每个数的最高位，发现应该把数按最高位从小到大排列。
 * - 此时数组是分块排序好的，块之间有序，块之内乱序。
 * - 对于每一块，再按次高位从小到大排序，逐步递归，完成排序。
 * - 具体可以使用双指针，复杂度O(n)可以接受。但是要处理次高位以及后面某位为空的情况，代码会写的比较长一点。
 *
 * 但是我们应该首先去想，这是什么类型的题，他和我们做过的什么题最为接近。答案是排序。
 * 本质都是把数组元素排序，只不过这里的顺序是自定义的，这个不同本质就体现在排序规则不同。
 * 解法1：所以只要设置合适的排序规则，这就是一个排序问题，可以用任何排序算法解决，最快的当然是：快速排序。
 * 解法2：用js的sort()函数实现，V8引擎实现sort()使用的是快速排序，时间复杂度也是最优。
 * - js数组转字符串3种内置方法，
 * - 只有join可以指定隔开的字符。
 * - toString() 是一般的转字符串方法,只是把数组项逗号隔开。
 * - toLocaleString() 对数字使用可以适应货币，对日期使用可以选多种格式,但也只是逗号隔开。
 */
// XXX 内置 sort() 方法
var minNumber = function (nums) {
	if (!nums.length) return ''
	nums.sort((x, y) => {
		// 如果希望x排在y前面就返回负数
		const sit1 = parseInt([x, y].join(''))
		const sit2 = parseInt([y, x].join(''))
		if (sit1 < sit2) return -1
		if (sit1 > sit2) return 1
		return 0
	})
	return nums.join('')
}
// 快排
var minNumber = function (nums) {
	if (!nums.length) return ''
	const quickSort = (l, r) => {
		if (l >= r) return
		let i = l,
			j = r
		while (i < j) {
			// j 先动，否则如果数组最后一项大于哨兵就出错
			while (i < j && compare(nums[j], nums[l])) j--
			while (i < j && compare(nums[l], nums[i])) i++
			let temp = nums[i] // XXX 不要用解构赋值，同一项交换会出错。
			nums[i] = nums[j]
			nums[j] = temp
		}
		let temp = nums[l]
		nums[l] = nums[i]
		nums[i] = temp
		quickSort(l, i - 1)
		quickSort(i + 1, r)
	}
	const compare = (x, y) => {
		const sit1 = parseInt([x, y].join(''))
		const sit2 = parseInt([y, x].join(''))
		if (sit1 < sit2) return false
		if (sit1 >= sit2) return true
	}
	quickSort(0, nums.length - 1)
	return nums.join('')
}
