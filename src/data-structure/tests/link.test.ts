import { LinkedList } from '@/data-structure/linkedList'

describe('test linkendList', () => {
	test('instantiate empty', () => {
		const emptyLink = new LinkedList()
		expect(emptyLink.count).toBe(0)
	})

	test('join', () => {
		const numberLink = new LinkedList<number>([1, 2, 3])
		expect(numberLink.join()).toBe('1->2->3')
		expect(numberLink.count).toBe(3)
	})

	test('instantiate array', () => {
		const numberLink = new LinkedList<number>([1, 2, 3])
		expect(numberLink.count).toBe(3)
	})

	test('push', () => {
		const emptyLink = new LinkedList()
		emptyLink.push(1)
		expect(emptyLink.count).toBe(1)
	})

	test('removeByIndex', () => {
		const arrayLink = new LinkedList([1, 2, 3, 4, 5])
		arrayLink.removeByIndex(3)
		expect(arrayLink.count).toBe(4)
		expect(arrayLink.join()).toBe('1->2->3->5')
	})

	test('removeByValue', () => {
		const arrayLink = new LinkedList([1, 2, 3, 4, 5])
		arrayLink.removeByValue(3)
		expect(arrayLink.count).toBe(4)
		expect(arrayLink.join()).toBe('1->2->4->5')
	})

	test('findByIndex', () => {
		const arrayLink = new LinkedList([1, 2, 3, 4, 5])
		const foundNode = arrayLink.findByIndex(3)
		expect(foundNode?.value).toBe(4)
	})

	test('insert', () => {
		const arrayLink = new LinkedList([1, 2, 3, 4, 5])
		arrayLink.insert(3, 10)
		expect(arrayLink.join(',')).toBe('1,2,3,4,10,5')
	})

	test('indexOf', () => {
		const arrayLink = new LinkedList([1, 2, 3, 4, 5])
		expect(arrayLink.indexOf(3)).toBe(2)
	})
})
