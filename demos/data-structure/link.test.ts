import { LinkedList } from '@/data-structure/link'

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
})
