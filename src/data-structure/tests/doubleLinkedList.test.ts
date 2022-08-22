import { DoubleLinkedList } from '@/data-structure/doubleLinkedList'

describe('DoubleLinkedList', () => {
	test('insert', () => {
		const dll = new DoubleLinkedList<number>()
		dll.insert(0, 1)
		dll.insert(1, 2)
		dll.insert(2, 3)
		dll.insert(1, 4)
		expect(dll.join(',')).toBe('1,4,2,3')
	})

	test('removeByIndex', () => {
		const dll = new DoubleLinkedList<number>()
		dll.insert(0, 1)
		dll.insert(1, 2)
		dll.insert(2, 3)
		dll.insert(3, 4)
		dll.removeByIndex(2)
		expect(dll.join(',')).toBe('1,2,4')
	})
})
