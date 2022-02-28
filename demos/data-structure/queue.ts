// Queue: First In First Out
class Queue {
	private queue: unknown[] = []
	
	enqueue(item: unknown) {
		this.queue.push(item)
	}

	dequeue() {
		return this.queue.pop()
	}

	peek() {
		return this.queue[this.queue.length - 1]
	}

	isempty() {
		return this.queue.length === 0
	}

	size() {
		return this.queue.length
	}

	clear() {
		this.queue = []
	}
}

const q = new Queue()
q.enqueue(1)
console.log(q, q.size(), q.peek(), q.isempty())
q.clear()
console.log(q.isempty())
q.enqueue(2)
q.dequeue()
console.log(q.isempty())
