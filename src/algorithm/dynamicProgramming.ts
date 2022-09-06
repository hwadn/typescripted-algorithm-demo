// min coin change
const minCoinChange = (coins: number[], amount: number, cache: Record<number, number[] | undefined>): number[] | -1 => {
	if (amount < 0) return -1
	if (amount === 0) return []
	let minCoins: number[] = []
	let currentLength = amount
	for(let i = 0; i < coins.length; i++) {
		const subAmount = amount - coins[i]
		const subMinCoins = cache[subAmount] ?? minCoinChange(coins, subAmount, cache)
		if (subMinCoins !== -1 && subMinCoins.length + 1 <= currentLength) {
			currentLength = subMinCoins.length + 1
			minCoins = [...subMinCoins, coins[i]]
		}
	}
	cache[amount] = minCoins
	return minCoins
}

const testCoins = [1, 3, 4]
const cache = {}
const minCoins = minCoinChange(testCoins, 6, cache)
console.log('minCoins:', minCoins)


interface IGood {
	weight: number
	value: number
}

const knapsack = (capacity: number, goodList: IGood[]): IGood[] | -1 => {
	if (capacity < 0) return -1
	if (capacity === 0) return []

	let maxValue = 0
	let result: IGood[] = []
	for(let i = 0; i < goodList.length; i++) {
		const currentGood = goodList[i]
		const restCapacity = capacity - currentGood.weight
		const restgoodList= goodList.slice(0, i).concat(goodList.slice(i + 1))
		const currentGoodList = knapsack(restCapacity, restgoodList)
		if (currentGoodList === -1) break
		const currentValue = currentGoodList.reduce((pre, cur) => (pre + cur.value), 0)
		if (currentValue + currentGood.value > maxValue) {
			maxValue = currentValue + currentGood.value
			result = [...currentGoodList, currentGood]
		}
	}
	return result
}

const knapsack2 = (capacity: number, goodList: IGood[]) => {
	const maxValueMetrix: number[][] = new Array(capacity + 1)
	maxValueMetrix.fill(new Array(goodList.length).fill(undefined))

	for (let c = 0; c <= capacity; c++) {
		for (let j = 0; j < goodList.length; j++) {
			if (c === 0 || j === 0) {
				maxValueMetrix[c][j] = 0
			} else if (goodList[j].weight >= c) {
				maxValueMetrix[c][j] = maxValueMetrix[c][j - 1]
			} else {
				const pushedValue = maxValueMetrix[c - goodList[j].weight][j - 1] + goodList[j].value
				const unPushedValue = maxValueMetrix[c][j - 1]
				maxValueMetrix[c][j] = pushedValue > unPushedValue ? pushedValue : unPushedValue
			}
		}
	}
	return maxValueMetrix[capacity][goodList.length - 1]
}

const goodList = [
	{
		weight: 2,
		value: 3
	},
	{
		weight: 3,
		value: 4
	},
	{
		weight: 4,
		value: 5
	}
]
const maxGoodList = knapsack(8, goodList)
const maxVal = knapsack2(8, goodList)
console.log('maxGoodList:', maxGoodList, maxVal)
