const fibonacci = (n: number): number => {
	if (n === 0) return 0
	if (n === 1 || n === 2) return 1
	return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(18))

// return [v(n), v(n - 1)]
const cacheFibonacci = (n: number): [number, number] => {
	if (n === 0) return [0, 0]
	if (n === 1) return [1, 0]
	const [vn_1, vn_2] = cacheFibonacci(n - 1)
	return [vn_1 + vn_2, vn_1]
}
console.log(cacheFibonacci(18)[0])

