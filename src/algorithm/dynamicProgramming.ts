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
