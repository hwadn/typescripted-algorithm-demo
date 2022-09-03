const swap = <TValue = unknown>(array: TValue[], leftIndex: number, rightIndex: number) => {
	const temporaryValue = array[leftIndex]
	array[leftIndex] = array[rightIndex]
	array[rightIndex] = temporaryValue
}

// O(n^2)
const bubbleSort = (array: number[], ascend = true) => {
	if (!array || array.length <= 1) return
	const orderfactor = ascend ? 1 : -1
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1 - i; j++) {
			if ((array[j] - array[j + 1]) * orderfactor > 0) {
				swap(array, j, j + 1)
			}
		}
	}
}

// 单个元素交换
const selectSort = (array: number[], ascend = true) => {
	if (!array || array.length <= 1) return
	const orderfactor = ascend ? 1 : -1
	for (let i = 0; i < array.length - 1; i++) {
		let minIndex = i
		for (let j = i + 1; j < array.length; j++) {
			if ((array[minIndex] - array[j]) * orderfactor > 0) {
				minIndex = j
			}
		}

		if (minIndex !== i) {
			swap(array, i, minIndex)
		}
	}
}

// 扑克牌排序，局部位移
const insertionSort = (array: number[], ascend = true) => {
	if (!array || array.length <= 1) return
	const orderfactor = ascend ? 1 : -1
	for (let i = 1; i < array.length; i++) {
		const temp = array[i]
		let j = i
		while(j > 0 && (temp - array[j - 1]) * orderfactor < 0) {
			array[j] = array[j - 1]
			j --
		}
		array[j] = temp
	}
}

const mergeSort = (array: number[], ascend = true): number[] => {
	if (!array || array.length <= 1) return array
	const orderfactor = ascend ? 1 : -1
	const midIndex = Math.floor(array.length / 2)
	const left = mergeSort(array.slice(0, midIndex), ascend)
	const right = mergeSort(array.slice(midIndex, array.length), ascend)
	return merge(left, right, orderfactor)
}

const merge = (left: number[], right: number[], orderfactor: number): number[] => {
	let i = 0
	let j = 0
	const result = []
	while (i < left.length && j < right.length) {
		if ((left[i] - right[j]) * orderfactor < 0) {
			result.push(left[i])
			i++
		} else {
			result.push(right[j])
			j++
		}
	}
	return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

const quickSort = (array: number[], ascend = true) => {
	if (!array || array.length <= 1) return array
	quick(array, 0, array.length - 1, ascend)
}

const quick = (array: number[], start: number, end: number, ascend = true) => {
	if (start >= end) return
	const orderfactor = ascend ? 1 : -1
	const midIndex = Math.floor((start + end) / 2)
	const midValue = array[midIndex]

	
	let i = start
	let j = end

	// 考虑已经排好序的情况
	while (i <= j) {
		while ((array[i] - midValue) * orderfactor < 0) i++
		while ((array[j] - midValue) * orderfactor > 0) j--

		if (i <= j) {
			swap(array, i, j)
			i++
			j--
		}
	}

	if (start < i -1) {
		quick(array, start, i - 1, ascend)
	}

	if (i < end) {
		quick(array, i, end, ascend)
	}
}

const testArray = [4,1,4,1,44,146,65,23,6,9,33]

quickSort(testArray, false)

console.log('testArray:', testArray.join(','))
