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
	public removeByIndex(index: number) {
		let count = 0
		let previousNode = this.head
		let currentNode = previousNode.next
		while(currentNode) {
			count++
			if (count === index) {
				const nextNode = currentNode.next
				previousNode.next = nextNode
			}
			previousNode = currentNode
			currentNode = currentNode.next
		}
	}

	// public removeByValue(value: TValue) {

	// }
}
