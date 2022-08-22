import { Node } from './linkedList'

class DoubleNode<TValue = unknown> extends Node<TValue> {
	constructor(public value?: TValue, public previous?: DoubleNode<TValue>, public next?: DoubleNode<TValue>) {
		super(value, next)
	}
}

export class DoubleLinkedList<TValue> {
	public head = new DoubleNode<TValue>()

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

	public insert(index: number, value: TValue) {
		let currentNode: DoubleNode<TValue> | undefined = this.head
		let count = 0
		while (currentNode) {
			if (count === index) {
				const insertedNode = new DoubleNode(value)
				const nextNode = currentNode.next
				currentNode.next = insertedNode
				insertedNode.previous = currentNode
				insertedNode.next = nextNode
				if (nextNode) {
					nextNode.previous = insertedNode
				}
				return
			}
			currentNode = currentNode?.next
			count++
		}
	}

	public removeByIndex(index: number) {
		let count = 0
		let currentNode = this.head.next

		while (currentNode) {
			if (count === index) {
				const previousNode = currentNode.previous
				const nextNode = currentNode.next
				if (previousNode) {
					previousNode.next = nextNode
				}

				if (nextNode) {
					nextNode.previous = previousNode
				}
				return
			}

			currentNode = currentNode.next
			count ++
		}
	}
}
