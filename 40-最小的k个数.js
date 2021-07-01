/**
 * 题目：输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 * 解法：top k 问题（最大/最小的k个，第k个）。注意这个题有重复数字的情况。
 * 解法一：快速排序。（任何一种排序都可以，但我们知道快排是最快的。）
 *     NOTE 不需要对整个数组排序，因为没有要求输出的有序性。利用快排的特点，每一次找下标j，j左边的都小于j，如果当j==k返回前面的就行
 * 解法二：大根堆/小根堆 JS实现堆 // TODO
 *
 */
var getLeastNumbers = function (arr, k) {
	if (k >= arr.length) return arr
	return quickSort(arr, 0, arr.length - 1, k)
}
const quickSort = (arr, l, r, k) => {
	if (l > r) return // XXX 标准快排模板是不需要处理l=r的情况的，但是这里需要。因为必须最后k=i才有返回值
	let i = l,
		j = r
	while (i < j) {
		while (i < j && arr[j] >= arr[l]) j-- // XXX 这里要加等于号，否则会死循环，可以一个等一个不等。
		while (i < j && arr[i] <= arr[l]) i++
		;[arr[i], arr[j]] = [arr[j], arr[i]] // XXX 普通数组可以用解构运算符
	}
	;[arr[l], arr[i]] = [arr[i], arr[l]]
	if (k < i) return quickSort(arr, l, i - 1, k)
	if (k > i) return quickSort(arr, i + 1, r, k)
	return arr.splice(0, k) // slice,splice都可以
}
