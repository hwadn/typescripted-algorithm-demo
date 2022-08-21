class Node<TValue = unknown> {
	constructor (public value?: TValue, public next?: Node<TValue>) {}
}

export class LinkedList<TValue = unknown> {
	public head = new Node<TValue>()
	public count = 0

	constructor (value?: TValue[]) {
		if (!value) return
		this.createLinkedListFromArray(value)
	}

	private createLinkedListFromArray(array: TValue []) {
		if (array?.length === 0) return
		this.count = array.length
		let currentNode = this.head
		for (let i = 0; i < array.length; i++) {
			const nextValue = array[i]
			const nextNode = new Node(nextValue)
			currentNode.next = nextNode
			currentNode = nextNode
		}
	}

	public join(divider = '->') {
		const nodeValues: (TValue | undefined)[] = []
		let currentNode = this.head.next
		while(currentNode) {
			const currentValue = currentNode.value
			nodeValues.push(currentValue)
			currentNode = currentNode.next
		}

		return nodeValues.join(divider)
	}

	public push(value: TValue) {
		let latestNode = this.head
		while(latestNode.next) {
			latestNode = latestNode.next
		}
		latestNode.next = new Node<TValue>(value)
		this.count++
	}

	public removeByIndex(index: number) {
		let count = 0
		let previousNode = this.head
		let currentNode = previousNode.next
		while(currentNode) {
			if (count === index) {
				const nextNode = currentNode.next
				previousNode.next = nextNode
				this.count--
			}
			previousNode = currentNode
			currentNode = currentNode.next
			count++
		}
	}

	public removeByValue(value: TValue) {
		let previousNode = this.head
		let currentNode = previousNode.next
		while(currentNode) {
			if (currentNode.value === value) {
				const nextNode = currentNode.next
				previousNode.next = nextNode
				this.count--
			}
			previousNode = currentNode
			currentNode = currentNode.next
		}
	}

	public findByIndex(index: number): Node<TValue> | void {
		let count = 0
		let currentNode = this.head.next
		while (currentNode) {
			if (index === count) return currentNode
			currentNode = currentNode.next
			count++
		}
	}

	public insert(index: number, value: TValue) {
		const foundNode = this.findByIndex(index)
		if (foundNode) {
			const nextNode = foundNode.next
			const insertedNode = new Node(value)
			insertedNode.next = nextNode
			foundNode.next = insertedNode
		}
	}

	public indexOf(value: TValue): number | void {
		let count = 0
		let currentNode = this.head.next
		while (currentNode) {
			if (currentNode.value === value) return count
			currentNode = currentNode.next
			count ++
		}
	}
}
