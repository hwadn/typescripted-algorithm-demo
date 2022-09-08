const knapSack = (weights: number[], values: number[], capacity: number): { index: number; percent: number }[] => {
	const costPerformanceList = weights.map((weight, index) => ({ cp: values[index] / weight, index })).sort((pre, cur) => pre.cp > cur.cp ? 1 : -1)
	const results: { index: number; percent: number }[] = []
	let rest = capacity
	for (let i = 0; i < costPerformanceList.length; i++) {
		const { index } = costPerformanceList[i]
		if (rest >= weights[i]) {
			results.push({ index, percent: 1 })
			rest -= weights[i]
		} else {
			results.push({ index, percent: rest / weights[index] })
			return results
		}
	}
	return []
}

const res = knapSack([2, 3, 4], [3, 4, 5], 6)
console.log('res:', res)
