import { quickSort } from './sorts'

// return index
const sequentSearch = (array: number[], value: number): number => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === value) return i
	}
	return -1
}

const binarySearch = (array: number[], value: number): number => {
	let start = 0
	let end = array.length - 1
	while (start <= end) {
		const midIndex = Math.floor((start + end) / 2)
		const midValue = array[midIndex]
		if (value > midValue) {
			start = midIndex + 1
		} else if (value < midValue) {
			end = midIndex - 1
		} else {
			return midIndex
		}
	}
	return -1
}

const testArray = [4,1,4,1,44,146,65,23,6,9,33]
quickSort(testArray)
console.log(testArray.join(','))
console.log(binarySearch(testArray, 4))
