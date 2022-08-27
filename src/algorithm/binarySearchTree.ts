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

	private inOrderTraverseNode(node: Node<TKey> | null, callback: (key: TKey) => void) {
		if (node !== null) {
			this.inOrderTraverseNode(node.left, callback)
			callback(node.key)
			this.inOrderTraverseNode(node.right, callback)
		}
	}

	// TODO
	private preOrderTraverseNode(node: Node<TKey> | null, callback: (key: TKey) => void) {}
	// TODO
	private postOrderTraverseNode(node: Node<TKey> | null, callback: (key: TKey) => void) {}
}

const bst = new BinarySearchTree()
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
