import { HashTable } from '@/data-structure/hashTable'

describe('HashTable', () => {
	test('basic usage', () => {
		const hash = new HashTable()
		hash.add('chd', 'chd1994')
		hash.add('chd', 'cxk')
		expect(hash.has('chd')).toBe(true)

		const keyValue = hash.get('chd')
		expect(keyValue?.value).toBe('chd1994')

		hash.remove('chd')
		expect(hash.has('chd')).toBe(false)
	})
})
