
export class MySet<TValue = any> {
	constructor (private items: Record<any, TValue> = {}){}

	public add(element: TValue) {
		if (this.has(element)) return

		// bug: an object has been transformed to '[object Object]'
		this.items[element as any] = element
	}

	public remove(element: TValue) {
		if (this.has(element)) {
			delete this.items[element]
		}
	}

	public has(element: TValue): boolean {
		if (this.items[element]) return true
		return false
	}

	public clear() {
		this.items = {}
	}

	public size() {
		return Object.keys(this.values).length
	}

	public values() {
		return Object.values(this.items)
	}
}

const s1 = new MySet()
s1.add(1)
s1.add('abc')
s1.add({ name: 'chd', age: 15 })
s1.add('abc')
s1.add({ name: 'chd', age: 15 })
s1.add('def')
s1.remove('def')

// expected-> s1: [1, 'abc', { name: 'chd', age: 15 }, { name: 'chd', age: 15 }]
// infact-> s1: [1, 'abc', { name: 'chd', age: 15 }]
// because the element of an object has been transformed to '[object Object]'
console.log('s1:', s1.values())

