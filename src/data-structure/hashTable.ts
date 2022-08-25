type IKey = string | number
class KeyValue<TValue = any> {
	constructor(public key: IKey, public value: TValue) {}
}

export class HashTable<TValue = any> {
	constructor(private readonly table: Record<number, KeyValue<TValue> | undefined> = {}) {}

	private buildHashKey(key: IKey): number {
		if ( typeof key === 'number') return key
		let total = 0
		for(let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i)
		}
		/**
		 * May produce conflict for different key,
		 * can use LinkedList to fix
		 */
		const maxAddress = 37
		return total % maxAddress
	}

	public has(key: IKey): boolean {
		const hashKey = this.buildHashKey(key)
		return !!this.table[hashKey]
	}

	public add(key: IKey, value: TValue) {
		const hashKey = this.buildHashKey(key)
		if (!this.table[hashKey]) {
			this.table[hashKey] = new KeyValue(key, value)
		}
	}

	public get(key: IKey): KeyValue<TValue> | undefined {
		const hashKey = this.buildHashKey(key)
		if (this.table[hashKey]) {
			return this.table[hashKey]
		}
	}

	public remove(key: IKey) {
		const hashKey = this.buildHashKey(key)
		if (this.table[hashKey]) {
			delete this.table[hashKey]
		}
	}
}
