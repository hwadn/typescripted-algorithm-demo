class Node<TValue = unknown> {
	constructor (public value?: TValue, public next?: Node<TValue>) {}
}

class LinkedList<TValue = unknown> {
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
		const nodeValues = []
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

	// TODO
}

// tests
const emptyLink = new LinkedList()
console.log('emptyLink:', emptyLink.join(), 'count:', emptyLink.count)
const numberLink = new LinkedList<number>([1, 2, 3])
console.log('numberLink:', numberLink.join(), 'count:', numberLink.count)
numberLink.push(5)
console.log('numberLink:', numberLink.join(), 'count:', numberLink.count)
