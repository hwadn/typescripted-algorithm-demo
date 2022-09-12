import { BinarySearchTree, Node } from '@/algorithm/binarySearchTree'

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

// bfs
const bfs = <TKey>(node: Node<TKey> | null): TKey[] => {
	const nodeQueue = [node]
	const keyQueue = []
	while (nodeQueue.length > 0) {
		const currentNode = nodeQueue.shift()
		if (currentNode) {
			keyQueue.push(currentNode.key)
			if (currentNode.left) {
				nodeQueue.push(currentNode.left)
			}

			if (currentNode.right) {
				nodeQueue.push(currentNode.right)
			}
		}
	}
	return keyQueue
}

// bfs
const dfs = <TKey>(node: Node<TKey> | null, results: TKey[]) => {
	if (node) {
		results.push(node.key)
		if (node.left) {
			dfs(node.left, results)
		}

		if (node.right) {
			dfs(node.right, results)
		}
	}
}

const res: any = []
dfs(bst.root, res)
console.log('res:', res.join(','))
