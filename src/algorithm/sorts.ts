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

const testArray = [4,1,4,1,44,146,65,23,6,9,33]
selectSort(testArray)
console.log('testArray:', testArray.join(','))
