/**
 * 题目：输入一个字符串，打印出该字符串中字符的所有排列。你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
 * 答案：
 *      1. 关键词：“所有”。遇到“所有”，或者“有几种组合，并输出”，就要想到递归。
 *      2. 除此之外，本题要求不重复。所以如果字符串本身有重复字符则需要剪枝。
 *      3. // XXX 这个题属于字符串的全排列，为什么要转化为数组做呢？
 *      9. 其他方法：排序去重；permutation。
 */
var permutation = function (s) {
	let res = []
	const arr = s.split('') // XXX 字符串转数组，可以用split函数
	const len = arr.length
	// 4. 怎么想到固定？“固定”2字是这种题的核心。
	// 5. 递归模板：（写法模板）四步走。（思考模板）函数功能，终止条件，递推关系。
	// 函数功能：试图固定当前位（x），当前位共有s.length-x种情况（不考虑剪枝）
	const dfs = x => {
		// 终止条件
		if (x === len - 1) {
			res.push(arr.slice().join(''))
			return
		}
		// 6. 处理过程：我觉得就是把现在的问题转化成对当前层的处理和一个和当前问题差不多的子问题。
		let dic = new Set()
		for (let i = x; i < len; i++) {
			if (dic.has(arr[i])) continue
			dic.add(arr[i])
			// XXX 8. 解构赋值新发现。如果数组同一项交换就会出错。所以这里要先判断x和i是不是相等，当然这样写是麻烦了，不过我是想搞清楚解构赋值。
			if (x === i) {
				let temp = arr[i]
				arr[i] = arr[x]
				arr[x] = temp
			} else {
				;[arr[i], arr[x]] = [arr[x], arr[i]]
			}
			// drill down
			dfs(x + 1)
			// XXX 7. 要不要还原？要，否则dic出错，感觉这种字符串排列最好是还原。
			let temp = arr[i]
			arr[i] = arr[x]
			arr[x] = temp
		}
		// 后处理：无
	}
	dfs(0)
	return res
}
