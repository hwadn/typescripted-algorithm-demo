// Stack: Last In First Out
class Stack {
	private items: unknown[]
	constructor() {
		this.items = []
	}

	public push(item: unknown) {
		this.items.push(item)
	}

	public pop() {
		return this.items.pop()
	}

	public isEmpty() {
		return this.items.length === 0
	}

	public peek() {
		return this.items[this.items.length - 1]
	}

	public clear() {
		this.items = []
	}

	public size() {
		return this.items.length
	}
}

const stack = new Stack()
stack.push(1)
console.log('stack:', stack)

stack.pop()
console.log('stack:', stack)

console.log('stack isEmpty:', stack.isEmpty())

stack.push('dd')
const top = stack.peek()
console.log('top:', top)

stack.clear()
console.log('stack:', stack, stack.size())

