// Init array
const array = ['a', 'b']
array.forEach(value => console.log(value))
array.push('c') // insert in the end
console.log(array)
array.unshift('d') // insert in the beginning
console.log(array)
array.pop() // delete the last item
console.log(array)
array.shift() // delete the first item
console.log(array)
array.splice(0, 1)// delete one item from index 0
console.log(array)
array.splice(0, 0, 'e', 'f') // insert two items from the index 0
console.log(array)
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
console.log(arr1.concat(arr2))
const isAllF = array.every(item => item === 'f')
console.log('isAllF:', isAllF)
const hasF = array.some(item => item === 'f')
console.log('hasF:', hasF)
const prefixArray = array.map(item => `test-${item}`)
console.log('prefixArray:', prefixArray)
const foundF = array.filter(item => item === 'f')
console.log('foundF:', foundF)
const joinedArratString = array.reduce((previous, current) => `${previous}-${current}`, 'start')
console.log('joinedArratString:', joinedArratString)
const arrayCopy = Array.from(array)
console.log('arrayCopy:', arrayCopy, 'the array:', array === arrayCopy)
const arrayOfArgs = Array.of(1, 4, 7)
console.log('arrayOfArgs:', arrayOfArgs)
const revertedArray = array.reverse()
console.log('revertedArray:', revertedArray)
const ascendArray = [4, 1, 2, 8,10].sort((a, b) => a - b)
console.log('ascendArray:', ascendArray)
const hasIncludeF = array.includes('f')
console.log('hasIncludeF:', hasIncludeF)
const arrayString = array.toString()
console.log('arrayString:', arrayString)
const arrayJoin = array.join('-')
console.log('arrayJoin:', arrayJoin)
