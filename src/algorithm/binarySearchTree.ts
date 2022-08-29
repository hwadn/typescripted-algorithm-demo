class Node<TKey = unknown> {
	public key: TKey
	public left: Node<TKey> | null = null
	public right: Node<TKey> | null = null
	constructor(key: TKey) {
		this.key = key
	}
}

export class BinarySearchTree<TKey = unknown> {
	public root: Node<TKey> | null
	constructor () {
		this.root = null
	}

	public insert(key: TKey) {
		if (this.root === null) {
			this.root = new Node(key)
		} else {
			this.insertNode(this.root, key)
		}
	}

	private insertNode(node: Node<TKey>, key: TKey) {
		if (key < node.key) {
			if (node?.left === null) {
				node.left = new Node(key)
			} else {
				this.insertNode(node.left, key)
			}
		} else {
			if (node?.right === null) {
				node.right = new Node(key)
			} else {
				this.insertNode(node.right, key)
			}
		}
	}

	public inOrderTraverse(): TKey[] {
		const keys: TKey[] = []
		this.inOrderTraverseNode(this.root, (key) => keys.push(key))
		return keys
	}

	public preOrderTraverse(): TKey[] {
		const keys: TKey[] = []
		this.preOrderTraverseNode(this.root, (key) => keys.push(key))
		return keys
	}

	public postOrderTraverse(): TKey[] {
		const keys: TKey[] = []
		this.postOrderTraverseNode(this.root, (key) => keys.push(key))
		return keys
	}

	private inOrderTraverseNode(node: Node<TKey> | null, callback: (key: TKey) => void) {
		if (node !== null) {
			this.inOrderTraverseNode(node.left, callback)
			callback(node.key)
			this.inOrderTraverseNode(node.right, callback)
		}
	}

	private preOrderTraverseNode(node: Node<TKey> | null, callback: (key: TKey) => void) {
		if (node !== null) {
			callback(node.key)
			this.preOrderTraverseNode(node.left, callback)
			this.preOrderTraverseNode(node.right, callback)
		}
	}
	private postOrderTraverseNode(node: Node<TKey> | null, callback: (key: TKey) => void) {
		if (node !== null) {
			this.postOrderTraverseNode(node.left, callback)
			this.postOrderTraverseNode(node.right, callback)
			callback(node.key)
		}
	}

	public min(): TKey {
		let currentNode: Node<TKey> | undefined | null = this.root
		while (currentNode?.left !== null) {
			currentNode = currentNode?.left
		}
		return currentNode.key
	}

	public max(): TKey {
		let currentNode: Node<TKey> | undefined | null = this.root
		while (currentNode?.right !== null) {
			currentNode = currentNode?.right
		}
		return currentNode.key
	}

	public search(key: TKey): Node<TKey> | void {
		return this.searchNode(this.root, key)
	}

	private searchNode(node: Node<TKey> | null, key: TKey): Node<TKey> | void {
		let currentNode = node
		if (!currentNode) return
		if (currentNode.key === key) {
			return currentNode
		} else if (currentNode.key < key) {
			currentNode = currentNode.right
		} else {
			currentNode = currentNode.left
		}
		return this.searchNode(currentNode, key)
	}

	public remove(key: TKey) {
		this.root  = this.removeNode(this.root, key)
	}

	public removeNode(node: Node<TKey> | null, key: TKey): Node<TKey> | null {
		if (!node) return null
		if (key < node.key) {
			node.left = this.removeNode(node.left, key)
			return node
		} else if (key > node.key) {
			node.right = this.removeNode(node.right, key)
			return node
		} else {
			if (!node.left && !node.right) {
				return null
			} else if (!node.left) {
				return node.right 
			} else if (!node.right) {
				return node.left
			} else {
				const minRightNode = this.minNode(node.right)
				node.key = minRightNode.key
				node.right = this.removeNode(node.right, node.key)
				console.log('node.right:', node.right)
				return node
			}
		}
		return null
	}

	private minNode(node: Node<TKey>): Node<TKey> {
		let currentNode = node
		while (currentNode.left) {
			currentNode = currentNode.left
		}
		return currentNode
	}
}

const bst = new BinarySearchTree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

console.log(bst.inOrderTraverse().join(','))
console.log(bst.preOrderTraverse().join(','))
console.log(bst.postOrderTraverse().join(','))
console.log('min:', bst.min())
console.log('max:', bst.max())
console.log('search 13:', bst.search(13))
bst.remove(15)
console.log(bst.inOrderTraverse().join(','))
