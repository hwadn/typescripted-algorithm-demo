// compute n! = n*(n-1)*(n-2)*...2*1
const factorialIntercative = (n: number): number => {
	if (n === 1 || n === 0) return 1
	const subResult = factorialIntercative(n - 1)
	return n * subResult
}

const tailFactorialIntercative = (n: number, subResult: number): number => {
	if (n === 1 || n === 0) return subResult
	return tailFactorialIntercative(n - 1, n * subResult)
}

console.log(factorialIntercative(5))
console.log(tailFactorialIntercative(5, 1))
